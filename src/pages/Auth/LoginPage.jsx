import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

/* eslint-disable react/jsx-no-undef */
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function signIn() {
    let item = { email, password };
    let result = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (result.status == 200) {
      result = await result.json();
      console.warn("result", result);
      localStorage.setItem("user-info", JSON.stringify(result));
      navigate("/dashboard");
    }else{
      alert("Login Failed");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F2F9FF]">
      <div className="relative flex flex-col m-6 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <div className="flex flex-col justify-center p-4">
          <p className="text-primary font-bold">Masuk</p>
          <form className="flex max-w-md flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Email" />
              </div>
              <TextInput
                id="email"
                type="email"
                value={email}
                placeholder="example@mail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Kata Sandi" />
              </div>
              <TextInput
                id="password"
                type="password"
                value={password}
                placeholder="********"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" className="focus:ring-transparent" />
              <Label htmlFor="remember">Ingat Saya</Label>
            </div>

            <Button onClick={signIn}>Masuk</Button>

            <div className="flex justify-center gap-1 text-sm">
              <p>Belum punya akun?</p>
              <button>
                <Link to="/register" className="text-primary font-semibold">
                  Daftar
                </Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
