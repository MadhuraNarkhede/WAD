index.html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>User Registration</title>
  <style>
    body { font-family: Arial; padding: 20px; }
    input, button { display: block; margin: 10px 0; padding: 8px; }
  </style>
</head>
<body>
  <h2>Register User</h2>
  <form id="regForm">
    <input name="name" placeholder="Enter your name" required>
    <input name="email" type="email" placeholder="Enter your email" required>
    <button type="submit">Register</button>
  </form>

  <script>
    document.getElementById("regForm").onsubmit = function(e) {
      e.preventDefault();
      const user = {
        name: e.target.name.value,
        email: e.target.email.value
      };
      let users = JSON.parse(localStorage.getItem("users") || "[]");
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      location.href = "users.html";
    };
  </script>
</body>
</html>


users.html
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial; padding: 20px; }
    ul { padding-left: 20px; }
  </style>
</head>
<body>
  <h2>Registered Users</h2>
  <div id="userList"></div>
  <script>
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    document.getElementById("userList").innerHTML =
      users.map(u => `Name: ${u.name}<br>Email: ${u.email}<br><br>`).join("");
  </script>
</body>
</html>
