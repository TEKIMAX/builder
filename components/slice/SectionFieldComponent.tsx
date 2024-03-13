"use client";

export default function SectionSlice({
  title = "Data to enrich your online business",
  description = "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
  backgroundColor = "#fffff",
  image1 = "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80",

  image2 = "https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80",

  image3 = "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80",

  image4 = "https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80",

  image5 = "https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80",

  btnTitle = "Get started",
  btnColor = "#ff80b5",
  textColor = "#000",
  descColor,
}: {
  title: string;
  description: string;
  backgroundColor: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  image5: string;
  btnTitle: string;
  btnColor: string;
  textColor: string;
  descColor: string;
}) {
  return (
    <section className="pt-6 pb-20 bg-gray-50 overflow-hidden w-full">
      <div className="container mx-auto px-4">
        <div className="bg-white overflow-hidden rounded-t-3xl">
          <div className="px-8 pt-20">
            <div className="md:max-w-2xl text-center mx-auto">
              <span className="inline-block mb-3 text-sm text-blue-500 font-bold uppercase tracking-widest">
                Best caption here
              </span>
              <h1 className="font-heading mb-6 text-5xl lg:text-6xl text-gray-900 font-black tracking-tight">
                Build what you imagine
              </h1>
              <p className="mb-8 text-xl font-bold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                venenatis volutpat velit, quis iaculis velit bibendum a.
                Maecenas accumsan fermentum nisl.
              </p>
              <div className="flex flex-wrap justify-center mb-20 -m-2">
                <div className="w-full md:w-auto p-2">
                  <a
                    className="block w-full px-8 py-3.5 text-lg text-center text-white font-bold bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-200 rounded-full"
                    href="#"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="relative rounded-lg">
            <div className="relative z-20 px-8 max-w-max mx-auto">
              <img src={image4} alt="" />
              <a
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 inline-block px-8 py-3.5 text-lg text-center text-gray-900 font-bold bg-gray-50 hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 rounded-full"
                href="#"
              >
                Watch Video
              </a>
            </div>
            <div className="absolute left-0 top-0 w-full h-1/2 bg-gray-100">
              <div className="h-full bg-white rounded-b-3xl"></div>
            </div>
            <div className="absolute left-0 bottom-0 w-full h-1/2 bg-gray-100"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
