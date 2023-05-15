import Layout from "@components/Layout";
import Link from "next/link";
import { useRouter } from 'next/router';
import { useState } from 'react';

const FormWork = () => {
  const router = useRouter();
 
  const [form, setForm] = useState({
    name: '',
    apellido: '',
    edad: '',
    aptitudes: '',
    tarifa: '',
    ubicacion: '',
    contacto: '',
    foto: '',
  });

  const [errors, setErrors] = useState({}); 

  const handleChange = (event) => {
    const { value, name } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  

  const handlePostulation = () => {
    alert("El posteo fue creado exitosamente")
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setForm((prevState) => ({...prevState, photo: file }));
  };

  return (
    <Layout>

      <p class="text-center font-bold">
       ¡No esperes más... Completa el siguiente formulario y consigue tu empleo!
      </p>
     

      <form className="font-bold mb-2" onSubmit={handleSubmit}> 
    <div class="font-bold mb-2 max-w-md mx-auto border-4 border-blue-500 p-8 rounded-lg bg-gray-200 rounded-lg p-8 mx-auto text-gray-700 font-bold mb-2 flex items-center justify-center max-w-md">


    <div className="font-bold mb-2">
      <div className="font-bold mb-2">
        <label htmlFor="name">Nombre: </label>
        <input
          className="form-control"
          type="text"
          placeholder="Nombre completo"
          autoComplete="off"
          name="name"
          value={form.name}
          onChange={handleChange}
          />
      </div>

      <div className="font-bold mb-2">
        <label htmlFor="name">Apellido: </label>
        <input
          className="form-control"
          type="text"
          placeholder="Apellido"
          autoComplete="off"
          name="apellido"
          value={form.apellido}
          onChange={handleChange}
          />
      </div>

      <div className="font-bold mb-2">
        <label htmlFor="edad">Edad: </label>
        <input
          className="form-control"
          type="text"
          placeholder="Debe ser mayor de 18 años"
          autoComplete="off"
          name="edad"
          value={form.edad}
          onChange={handleChange}
        />
      </div>
  
      

      <div className="font-bold mb-2">
        <label htmlFor="aptitudes">Aptitudes: </label>
        <input
          className="form-control"
          type="text"
          placeholder="¿Qué servicios brinda?"
          autoComplete="off"
          name="aptitudes"
          value={form.aptitudes}
          onChange={handleChange}
          />
      </div>


      <div className="font-bold mb-2">
        <label htmlFor="aptitudes">Tarifa: </label>
        <input
          className="form-control"
          type="integer"
          placeholder="Costo estimado"
          autoComplete="off"
          name="tarifa"
          value={form.tarifa}
          onChange={handleChange}
          />
      </div>


      <div className="font-bold mb-2">
        <label htmlFor="Ubicación">Ubicación: </label>
        <input
          className="form-control"
          type="text"
          placeholder="Zona/Barrio"
          autoComplete="off"
          name="ubicación"
          value={form.ubicación}
          onChange={handleChange}
          />
      </div>

      <div className="font-bold mb-2">
        <label htmlFor="contacto">Contacto: </label>
        <input
          className="form-control"
          type="integer"
          placeholder="Email o teléfono"
          autoComplete="off"
          name="contacto"
          value={form.contacto}
          onChange={handleChange}
          />
      </div>

      <div className="font-bold mb-2">
  <label htmlFor="profile-picture">Foto de perfil: </label>
  <input
    className="form-control"
    type="file"
    accept="image/*"
    name="profile-picture"
    onChange={handleFileChange}
  />
</div>
      </div>
      

        </div>
        <button className="bg-gray-400 p-5 rounded-xl duration-200 hover:scale-105 mx-auto block" type="submit" onClick={handlePostulation}>
        Agregar mi postulación de empleo
      </button>

      <Link href="/trabajar">
      </Link>

    </form>
    </Layout>
  );
};

export default FormWork;
