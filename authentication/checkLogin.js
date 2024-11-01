const user = localStorage.getItem("user") || "";

if (!user || user.length <= 0) localStorage.setItem("user","user");

if (user && user.length > 0) window.location.href = "../index.html";
