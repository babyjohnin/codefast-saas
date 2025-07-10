import Link from "next/link";

const ButtonLogin = ({ isLoggedIn, name }) => {
  if (isLoggedIn) {
    return (
      <Link href="/dashboard" className="btn btn-primary">
        Welcome back {name}
      </Link>
    );
  }
};

export default function Home() {
  const isLoggedIn = true;
  const name = "GenieOS";
  return (
    <main>
      <section className="bg-base-200">
        <div className="max-w-3xl mx-auto flex justify-between items-center px-8 py-2">
          <div className="font-bold">CodeFastSaaS</div>
          <div className="space-x-4 max-md:hidden">
            <a className="link link-hover">Pricing</a>
            <a className="link link-hover">FAQ</a>
          </div>
          <div className="">
            <ButtonLogin isLoggedIn={isLoggedIn} name={name} />
          </div>
        </div>
      </section>
      <section className="text-center py-32 px-8 max-w-3xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-extrabold">
          Customers rave about this product.
        </h1>
        <div className="text-gray-700 pb-5">
          Buy now at a special discount at $5.00. Get it now!
        </div>
        <Link href="/dashboard" className="btn btn-lg btn-soft btn-primary">
          Get GenieOS
        </Link>
      </section>
    </main>
  );
}
