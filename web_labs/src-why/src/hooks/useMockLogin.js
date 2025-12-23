import { useState } from "react";

export default function useMockLogin() {
  const [loading, setLoading] = useState(false);

  const login = (phone, password) => {
    setLoading(true);
    setLoading(false);

    return {
      id: "mock-user",
      name: "Mock User",
      phone: phone || "+79991234567",
      email: "mockuser@example.com",
      birthday: "1990-01-01",
    };
  };

  return { login, loading };
}
