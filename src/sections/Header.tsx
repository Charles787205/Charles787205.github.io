

const Header = () => {
  return (
    <section className="h-screen justify-center max-w-[1500px] ml-auto mr-auto shadow-lg black p-10">
      <div className="flex  border-b-2 border-blue-500 p-2 gap-10">
        <div className="flex flex-col gap-10">
          <h1 className="text-6xl font-bold text-blue-900">
          Jovian Charles Canedo
          </h1>
          <p className="text-justify text-slate-900">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime praesentium culpa eveniet sed id magnam non quasi incidunt aperiam inventore, in pariatur qui eos excepturi ad possimus alias voluptates modi.
            Deleniti sint ipsum odit dolorem impedit aperiam iusto error! Assumenda, perspiciatis architecto quidem, necessitatibus at ut rem quas vitae sapiente porro omnis non doloribus quisquam laudantium illum ducimus provident pariatur.
            Quae perferendis quaerat incidunt officia consequatur libero, sint architecto! Culpa corrupti et enim temporibus animi vel ex molestiae adipisci hic, est, architecto doloremque. Maxime quod expedita facilis numquam. Porro, id!
          </p>
        </div>
        <div className="flex flex-col min-w-[350px]">
          <ul className="">
            <li><strong>Address:</strong> Bago Aplaya, Davao City, Philippines</li>
            <li><strong>Email:</strong> joviancharles1210@gmail.com</li>
            <li><strong>Phone:</strong> +63156787205</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Header