export default function useMockUser(authUser) {
  const user = {
    name: authUser.name || "Mock User",
    phone: authUser.phone || "+79991234567",
    email: "user@example.com",
    birthday: "1995-03-15"
  };

  const updateName = newName => {
    user.name = newName;
  };

  const changePassword = (oldPass, newPass) => {
    console.log("Password changed:", oldPass, newPass);
  };

  return { user, updateName, changePassword };
}
