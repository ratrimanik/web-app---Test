/* eslint-disable react/jsx-no-undef */

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  async function signUp() {
    let item = { first_name, last_name, email, password, confirm_password };
    if (password == confirm_password) {
      let result = await fetch("http://localhost:8000/api/register", {
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
      } else {
        alert("Register Failed");
      }
    } else {
      alert("Password tidak sama");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F2F9FF]">
      <div className="relative flex flex-col m-6 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        <div className="flex flex-col justify-center p-4">
          <p className="text-primary font-bold ">Daftar</p>
          <form className="flex max-w-md flex-col gap-4">
            <div>
              <div className="flex gap-2">
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="name" value="Nama Depan" />
                  </div>
                  <TextInput
                    id="first_name"
                    type="text"
                    value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                    <Label htmlFor="name" value="Nama Belakang" />
                  </div>
                  <TextInput
                    id="last_name"
                    type="text"
                    value={last_name}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>
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
                placeholder="****"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="confirm_password" value="Kata Sandi" />
              </div>
              <TextInput
                id="confirm_password"
                type="password"
                value={confirm_password}
                placeholder="****"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="remember" className="focus:ring-transparent" />
              <Label htmlFor="remember">Ingat Saya</Label>
            </div>
            <Button onClick={signUp}>Daftar</Button>
            <div className="flex justify-center gap-1 text-sm">
              <p>Sudah punya akun?</p>
              <button>
                <Link to="/" className="text-primary font-semibold">
                  Masuk
                </Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
