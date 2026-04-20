import { useTitle } from "../hook/useTitle";

function About() {
  useTitle("About Developer | Jackie Store");
  return (
    <div className="">
      <div className="flex flex-col px-5 xl:flex-row items-center pt-14 gap-7">
        <img
          src="https://cdn.pixabay.com/photo/2022/10/22/17/00/gull-7539615_1280.jpg"
          alt="bird"
          className=" xl:w-1/2 rounded-md"
        />
        <div>
          <h2 className="font-bold text-3xl">Jackie Dev</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
            itaque, velit sint nihil voluptatem, perspiciatis, perferendis optio
            ipsum nostrum temporibus explicabo praesentium reprehenderit
            recusandae placeat cum commodi fugit excepturi quod consequuntur
            minus? Adipisci ea impedit non, temporibus quas consequatur quaerat
            optio error mollitia exercitationem dolorem doloremque, dolores
            sapiente pariatur dolorum suscipit saepe! Laboriosam placeat dolores
            quam dicta nam sunt voluptas repudiandae necessitatibus magnam
            dolore voluptatem tenetur ipsam provident ea ut quaerat aliquam
            accusantium nesciunt, officia saepe? Alias repellendus officiis
            error, labore illo, consectetur nesciunt natus, voluptate odit
            itaque dolorem incidunt praesentium culpa sit unde ratione beatae
            veritatis perspiciatis! Perspiciatis pariatur aliquid modi omnis
            commodi cum beatae qui inventore. Unde eum perspiciatis quia placeat
            delectus asperiores voluptatem blanditiis, porro dolorem iure
            consectetur nemo fugit suscipit deleniti, at repellat esse officia
            quidem magni facilis. Labore, culpa tenetur alias ipsa expedita
            consequuntur. Ea explicabo dolorum consectetur nisi delectus
            aspernatur optio ex cum, similique, ipsam officia vel tenetur dicta?
            Accusantium consequatur laborum nihil. Mollitia, rem adipisci!
            Commodi nulla saepe dolorum, quo recusandae cupiditate quae possimus
            temporibus impedit explicabo vitae odio at minima excepturi animi
            blanditiis voluptas totam repellendus illum voluptate! Et optio
            deleniti nemo aut, blanditiis culpa ea odit. Repellat unde inventore
            qui amet.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
