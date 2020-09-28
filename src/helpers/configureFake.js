let users = JSON.parse(localStorage.getItem("users")) || [];

export function configureFake() {
  let realFetch = window.fetch;

  window.fetch = function (url, opts) {
    const { method, headers } = opts;

    const body = opts.body && JSON.parse(opts.body);

    return new Promise((resolve, reject) => {
      setTimeout(handleRoute, 500);

      function handleRoute() {
        switch (true) {
          case url.endsWith("/users/authenticate") && method === "POST":
            return authenticate();
          case url.endsWith("/users/register") && method === "POST":
            return register();
          default:
            return realFetch(url, opts)
              .then((response) => resolve(response))
              .catch((error) => reject(error));
        }
      }

      function authenticate() {
        const { email, password } = body;
        const user = users.find(
          (x) => x.email === email && x.password === password
        );

        if (!user) return error("Email or passwors is incorrect");
        return ok({
          id: user.id,
          email: user.email,
          password: user.password,
          firstname: user.firstname,
          lastName: user.lastName,
          token: "fake-jwt-token"
        });
      }

      function register() {
        const user = body;

        if (users.find((x) => x.email === user.email)) {
          return error(`Email  ${user.email} is already taken`);
        }

        // assign user id and a few other properties then save
        user.id = users.length ? Math.max(...users.map((x) => x.id)) + 1 : 1;
        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));

        return ok();
      }

      function ok(body) {
        resolve({
          ok: true,
          text: () => Promise.resolve(JSON.stringify(body))
        });
      }

      function unauthorized() {
        resolve({
          status: 401,
          text: () =>
            Promise.resolve(JSON.stringify({ message: "Unauthorized" }))
        });
      }

      function error(message) {
        resolve({
          status: 400,
          text: () => Promise.resolve(JSON.stringify({ message }))
        });
      }
    });
  };
}
