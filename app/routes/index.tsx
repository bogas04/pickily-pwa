import { HTMLAttributes } from "react";
import type { MetaFunction, LinksFunction, LinkProps } from "remix";
import { useLocation, Link } from "remix";
import { Footer, footerStylesUrl } from "~/components/footer";
import styles from "~/styles/index.css";

// https://remix.run/api/conventions#meta
export let meta: MetaFunction = () => {
  return {
    title: "Pickily",
    description: "Welcome to remix!",
  };
};

// https://remix.run/api/conventions#links
export let links: LinksFunction = () => [
  {
    rel: "stylesheet",
    href: footerStylesUrl,
  },
  {
    rel: "stylesheet",
    href: styles,
  },
];

// https://remix.run/guides/routing#index-routes
export default function Index() {
  const { pathname } = useLocation();
  return (
    <>
      <header className="index-header">
        <div className="index-header-heading">
          <div>
            <Bolt />
            <div>
              <h1>Instant in 15 mins</h1>
              <button>To Home v</button>
            </div>
          </div>
          <div>
            <FreeDelivery />
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <input
            className="index-search"
            type="search"
            placeholder="Search veggies, groceries or medicines"
          />
          <Search style={{ position: "absolute", top: 13, left: 13 }} />
        </div>
      </header>
      <main className="index-main">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quidem
        dolores quod est corrupti magni? Numquam magni animi laboriosam quis
        vero nisi maiores vel cum corrupti sequi fugit eius, architecto
        necessitatibus, blanditiis quasi accusamus reprehenderit voluptatum ea
        deleniti, aliquam doloribus tempore. Ipsam architecto reiciendis, dolore
        recusandae earum necessitatibus cumque nemo eum ad vero praesentium aut,
        mollitia officiis dolor voluptas? Nisi dolor magni voluptates rerum
        facere, dolorem adipisci repellat rem ratione aspernatur. Voluptas, nam
        alias, sequi, dolores expedita provident autem nihil distinctio dolor
        sed animi nulla amet tempore pariatur iusto minima velit ut deleniti
        magnam neque delectus labore soluta! Necessitatibus commodi ab totam.
        Exercitationem ipsum nam ducimus earum, a illo veritatis non dolores
        neque necessitatibus dolore maiores rerum cumque aliquam. Natus,
        expedita! Dignissimos dolores aut iusto laboriosam aliquid. Ipsam illo,
        placeat porro aut, dicta sed eum fuga sit neque non accusantium magnam
        blanditiis aliquid reiciendis ipsum autem consequatur laboriosam ex
        earum architecto optio vitae iste. Totam eveniet animi velit
        exercitationem. Sed voluptatem est saepe quae enim. Cumque natus
        incidunt distinctio labore reiciendis, soluta consectetur deleniti
        aliquam. Eligendi cum doloremque perspiciatis iste. Minima vel quibusdam
        esse non excepturi nulla tempore assumenda recusandae iste eius expedita
        eum sed cupiditate laudantium, ullam quasi sunt. In eos quos sequi ea.
        Expedita hic unde quo tenetur explicabo maxime maiores excepturi, minus
        incidunt at? Voluptatum rerum fugiat, odio facilis facere mollitia
        voluptatibus itaque cumque deleniti id totam explicabo natus temporibus
        laborum ducimus dicta officia animi repellat exercitationem et iusto,
        sapiente error laudantium adipisci. Ex, cum et minima molestiae
        inventore sit, deleniti velit possimus veritatis saepe culpa corporis
        fugit consequuntur amet obcaecati aut dolorum laudantium enim sapiente
        nihil est? Ab a porro sunt, facilis laboriosam culpa totam. Aperiam
        dolorem nemo praesentium esse error cum reiciendis quod velit
        voluptatibus consectetur quam earum maxime perspiciatis nisi, sed
        facere. Laboriosam asperiores doloribus repellendus, quisquam, labore
        atque iusto quas tempore, quidem officia illum itaque sed dolorem ad
        aspernatur quaerat? Illo, aperiam. Neque vero doloribus similique
        distinctio dignissimos assumenda dicta ea suscipit minima harum
        consectetur ullam impedit architecto saepe perferendis quas, laudantium,
        porro ratione deserunt, ab quod. Eligendi rerum nemo ipsum unde
        inventore iste, laudantium soluta incidunt quia necessitatibus beatae,
        illum obcaecati molestiae amet facere. Voluptas aliquid magni possimus
        veritatis esse illum repudiandae, voluptatem at repellat placeat
        mollitia qui reprehenderit, asperiores ab iusto ex? At vero, optio
        accusantium asperiores cum molestiae porro magni odio ratione quasi aut
        quod fugit quia vitae aperiam nobis minima molestias delectus officia
        quisquam dignissimos. Nihil quas eius mollitia libero similique
        laboriosam, placeat velit corporis inventore. Perferendis cum harum
        corporis assumenda, iure laborum dolorum, quos, modi quasi fugit
        distinctio tenetur molestias asperiores odio et minus non at?
        Praesentium nisi quam molestiae non voluptates deleniti laborum?
        Voluptatem repudiandae soluta placeat corporis velit quia facere
        temporibus porro iure. Neque cupiditate unde iure numquam quidem
        doloremque animi excepturi facilis rerum a maxime explicabo, quis
        reprehenderit mollitia incidunt adipisci nisi laudantium consequatur
        provident perferendis repellendus fuga quo! Non et optio laudantium
        porro mollitia? Illum, architecto accusantium sed deleniti odit, ducimus
        consequatur alias labore atque asperiores iusto. Tenetur minus possimus
        maxime veritatis adipisci repellat officiis placeat eum soluta eos.
        Voluptatibus iste vel autem doloremque facilis minima nam non, earum sit
        hic repellendus soluta rerum, architecto maxime natus deleniti dicta
        ducimus dolor! Amet illo sapiente architecto magnam numquam quisquam
        maiores necessitatibus dolorem. Ea odit autem itaque eaque distinctio
        earum minus excepturi veniam officia doloribus, adipisci quos blanditiis
        modi. Laboriosam, pariatur debitis beatae nostrum necessitatibus ipsa
        perferendis eos maxime porro. Hic velit nostrum aliquam deserunt
        laudantium eum minus, nisi deleniti nobis cumque voluptatem illum
        reiciendis tempore quisquam molestiae voluptate placeat ipsum aperiam
        doloribus magnam alias fugit assumenda. Quod, labore? Consequatur
        distinctio animi rerum ipsa optio ullam similique alias. Culpa ex magnam
        molestias maiores, recusandae tenetur aperiam iusto esse quidem vitae
        ratione autem, quis repudiandae architecto ipsum et necessitatibus
        corporis aut nobis, in eius voluptates dicta quisquam facere. Sed, ex
        magni quaerat cupiditate iste numquam dolores aperiam, voluptates error
        sint, dolor illum rerum cum alias molestias earum nesciunt quibusdam
        harum expedita fugiat culpa necessitatibus explicabo similique ut.
        Doloribus explicabo maxime quo facilis. Commodi ex iure, impedit error
        ratione, amet dolor mollitia ipsa harum esse maiores. Nulla non delectus
        vel nisi maiores voluptatem ab, autem rerum! Neque placeat molestias,
        totam expedita dolore vel facere ab odit nesciunt, consequatur ullam
        ipsam labore, doloribus in necessitatibus fugit suscipit laboriosam
        quisquam hic tempora facilis harum libero quos distinctio. Error
        mollitia, tempora possimus voluptatem ea doloribus odit, voluptate,
        alias omnis sunt eos fuga asperiores assumenda libero. Vero iste commodi
        asperiores sequi esse voluptas quaerat vel, saepe porro corporis!
        Placeat quis amet laboriosam quo, veritatis assumenda recusandae iure
        autem veniam odio aut quibusdam ad! Aliquid beatae, suscipit alias
        doloribus recusandae nulla odit animi tempore cum temporibus! Quisquam
        possimus, doloremque facere corrupti quibusdam qui provident similique
        culpa optio, voluptatum tempore! Modi, eius, ducimus quo temporibus
        laudantium esse autem facere saepe atque officia, neque quasi aliquid in
        ullam odit blanditiis est culpa dolores molestias ea quis! Mollitia ad
        ducimus molestiae dolore laborum eum eos ut. Labore, non rem et magni
        officiis quos vel eum neque velit dolorem tenetur molestias nesciunt
        fugit provident porro. Sit cupiditate optio officia, nam itaque rerum
        natus! Tempora autem quam totam cum non? Dolor maiores, in id recusandae
        molestias voluptatum qui repellendus quibusdam iste labore dignissimos
        iure a sint odio voluptates, aspernatur aliquid consequuntur laudantium
        inventore eos ab cumque fugiat molestiae repellat? Minima ut magnam
        praesentium dignissimos aliquid! Repudiandae reprehenderit doloribus
        fugit, at facere pariatur quasi earum. Consequuntur ullam reprehenderit,
        id incidunt iusto possimus quisquam iure. Tenetur cupiditate ducimus
        dolore, est omnis ea, pariatur quaerat provident quod eum aspernatur
        magnam, eius excepturi. Aut veritatis fugit autem hic excepturi
        blanditiis non voluptatem quidem aspernatur accusantium enim quis eaque
        aliquam natus expedita ratione reiciendis libero consequuntur, soluta
        laborum nesciunt alias vel omnis? Laudantium quibusdam hic, temporibus
        minus sapiente nemo deleniti est cupiditate porro unde nisi consequuntur
        quam? Dignissimos, necessitatibus ab nulla veniam fugit commodi, tenetur
        obcaecati sunt ad error, neque exercitationem eius. At dignissimos nobis
        molestias. Molestias perspiciatis omnis delectus, architecto optio
        corporis.
      </main>
      <Footer />
    </>
  );
}

function Bolt(props: HTMLAttributes<SVGElement>) {
  return (
    <svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M23.111 10.436h-5.493l2.969-7.876h-7.68L8.764 15.644h5.21L11.057 29.53 23.11 10.436z"
        fill="url(#paint0_linear_1420_7237)"
      />
      <path
        opacity={0.51}
        d="M23.111 10.436h-5.493l2.969-7.876h-7.68L8.889 15.573h5.102L11.058 29.53 23.11 10.436z"
        fill="url(#paint1_linear_1420_7237)"
      />
      <g opacity={0.7}>
        <path
          opacity={0.5}
          d="M14.684 3.396L11.236 14.31h4.569l-2.916 9.298 2.258-8.729h-5.085l3.45-11.502 1.172.018z"
          fill="url(#paint2_linear_1420_7237)"
        />
      </g>
      <path
        d="M20.533 2.756l-2.986 7.733h5.564L11.164 29.298l3.058-13.814H8.996l4.017-12.728h7.52zm-7.52-.978a1.138 1.138 0 00-.569.23.942.942 0 00-.373.499L7.982 15.236a.853.853 0 000 .426c.036.12.09.234.16.338.11.108.235.199.374.267.149.072.314.102.48.089h3.84L10.098 29.12a.853.853 0 00.106.658c.128.203.323.354.551.426.13.018.262.018.392 0 .185.004.368-.039.533-.124.154-.09.288-.21.391-.356L23.875 10.97a.854.854 0 00.196-.533.942.942 0 00-.32-.676 1.12 1.12 0 00-.747-.284h-4l2.507-6.418a1.03 1.03 0 000-.462.942.942 0 00-.569-.712 1.084 1.084 0 00-.48 0l-7.449-.106z"
        fill="url(#paint3_linear_1420_7237)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1420_7237"
          x1={8.7645}
          y1={16.0178}
          x2={23.1112}
          y2={16.0178}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FE8900" />
          <stop offset={1} stopColor="#FE5500" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1420_7237"
          x1={8.85333}
          y1={16.0178}
          x2={23.1111}
          y2={16.0178}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.3} stopColor="#FE8900" />
          <stop offset={0.39} stopColor="#FE8200" />
          <stop offset={0.52} stopColor="#FE7000" />
          <stop offset={0.67} stopColor="#FE5500" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_1420_7237"
          x1={18.8267}
          y1={6.95113}
          x2={7.89337}
          y2={19.6267}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" stopOpacity={0.2} />
          <stop offset={0.05} stopColor="#fff" stopOpacity={0.25} />
          <stop offset={0.15} stopColor="#fff" stopOpacity={0.39} />
          <stop offset={0.29} stopColor="#fff" stopOpacity={0.61} />
          <stop offset={0.45} stopColor="#fff" stopOpacity={0.92} />
          <stop offset={0.49} stopColor="#fff" />
          <stop offset={0.55} stopColor="#fff" stopOpacity={0.95} />
          <stop offset={0.65} stopColor="#fff" stopOpacity={0.81} />
          <stop offset={0.79} stopColor="#fff" stopOpacity={0.59} />
          <stop offset={0.96} stopColor="#fff" stopOpacity={0.28} />
          <stop offset={1} stopColor="#fff" stopOpacity={0.2} />
        </linearGradient>
        <linearGradient
          id="paint3_linear_1420_7237"
          x1={24.8889}
          y1={-13.2267}
          x2={9.77776}
          y2={30.3289}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFC82F" />
          <stop offset={1} stopColor="#FD4900" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function FreeDelivery(props: HTMLAttributes<SVGElement>) {
  return (
    <svg
      width={49}
      height={42}
      viewBox="0 0 49 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 32.286c.028-2.723.95-9.433.95-9.433 1.006-.028 3.296-.225 4.442.477.67.421 1.34 1.6 1.452 2.611.112 1.067.056 2.976-.782 4.296C3.548 34.139 0 32.287 0 32.287zm2.85-7.047l-.475 4.745c1.787.561 4.134-5.166.474-4.745zM19.444 22.965s-.643 6.879-.894 9.265l2.235-.084c.39-2.92.81-7.244 1.424-9.265l-2.765.084zM12.152 32.258c.028-.898.196-2.386.196-2.386s-1.76.112-3.13.224l.14-1.712c.727-.056 2.515-.14 2.515-.14.084-.562.14-1.124.223-1.685-.726.084-1.9.196-2.598.224.056-.42.112-1.263.224-1.628.978-.056 3.268-.028 3.268-.028.196-.814.531-1.91.531-1.91-1.788-.083-3.548-.14-5.336-.14-.53 1.825-1.117 8.086-1.005 9.321 0 .028 3.715-.112 4.972-.14zM34.417 31.921c.028-.898.196-2.386.196-2.386s-1.76.112-3.129.224l.14-1.712c.726-.056 2.514-.14 2.514-.14.084-.562.14-1.124.223-1.685-.726.084-1.9.197-2.598.224.056-.42.112-1.263.224-1.628.978-.056 3.268-.028 3.268-.028.196-.814.531-1.909.531-1.909-1.788-.084-3.548-.14-5.336-.14-.53 1.825-1.117 8.085-1.005 9.32.027 0 3.715-.112 4.972-.14z"
        fill="#1D2939"
      />
      <path
        d="M42.072 30.152c-.643-.59-2.123-1.88-2.403-2.695 1.146-.168 2.18-1.095 2.207-2.386.084-2.836-2.765-2.667-4.944-2.611H36.513s-1.202 6.71-1.146 9.63c0 0 1.397-.197 2.18-.225.139-1.067.25-2.583.418-4.043.363 1.039.95 2.106 1.62 2.92.028.028.028.056.056.056v.028a6.65 6.65 0 001.006.983l.028-.028.028-.028.028-.028.056-.056.028-.029.056-.056.027-.028c.392-.28.978-.87 1.174-1.404zm-4.107-2.302c.028-.309.056-.533.084-.814.028-.196.056-.477.084-.674.112-.758.223-1.431.335-1.965.559-.196.95.084 1.062.477.223.646-.252 1.629-1.425 1.46l-.14 1.516z"
        fill="#1D2939"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.762 22.965c-1.034 4.436-1.034 6.879-1.062 6.99l2.514-.14c-.083 1.04-.251 2.443-.251 2.443-1.369-.225-4.526-.028-4.526-.028.14-1.91.559-9.124.727-9.209l2.598-.056zM29.864 22.825l-3.409 9.293-2.346-.028-1.397-9.04 2.319-.113c.14.814.447 5.615.614 6.43 0 0 1.341-5.868 1.76-7.02l2.459.478zM49 22.965l-2.682 5.054-.726 3.818-2.347-.056.699-3.425c-.727-1.573-2.096-5.643-2.096-5.643l2.319-.113c.14.814.922 2.611 1.062 3.425.474-1.066.894-2.442 1.313-3.565l2.458.505zM25.115 12.521l.335-2.33c-2.403.028-5.7.056-5.7.056s-1.033 7.974-1.256 10.893l2.765-.168c.14-1.151.447-4.408.447-4.408.894-.084 2.487-.112 2.487-.112l.363-1.629.056-.336-2.738.168c.028-.505.168-2.134.168-2.134 1.48-.112 3.073 0 3.073 0z"
        fill="#1D2939"
      />
      <path
        d="M32.713 18.642c-.726-.674-2.067-1.91-2.402-2.836 1.285-.196 2.458-1.235 2.486-2.667.084-3.172-3.1-3.004-5.531-2.92h-.475s-1.341 7.524-1.285 10.837c0 0 1.564-.224 2.43-.253.14-1.207.28-2.92.475-4.548.42 1.18 1.062 2.359 1.816 3.285.028.028.028.056.056.084l.028.028a8.18 8.18 0 001.117 1.095c.028-.056 1.062-1.544 1.285-2.105zm-4.302-2.415c.028-.365.056-.59.112-.926.028-.225.056-.534.084-.758.111-.842.251-1.6.39-2.19.643-.225 1.062.084 1.202.562.251.73-.28 1.824-1.592 1.656l-.196 1.656z"
        fill="#1D2939"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.887 20.635c.028-1.01.224-2.667.224-2.667s-2.18.112-3.688.28l.168-1.908c.81-.085 2.821-.169 2.821-.169.084-.646.168-1.263.224-1.909-.81.084-2.151.225-2.906.253.056-.45.14-1.432.252-1.825 1.117-.056 3.66-.028 3.66-.028.195-.927.363-2.134.39-2.134a98.687 98.687 0 00-5.782-.168c-.615 2.05-1.23 9.04-1.146 10.444.028 0 4.358-.14 5.783-.169zM45.424 20.523c.028-.983.224-2.611.224-2.611s-1.928.112-3.409.253l.168-1.882c.782-.084 2.766-.168 2.766-.168.084-.618.167-1.235.223-1.853-.81.084-2.095.225-2.821.253.056-.45.14-1.376.223-1.769 1.09-.056 3.269-.028 3.269-.028.195-.899.363-1.965.363-1.965-1.956-.113-3.38-.253-5.308-.281-.587 1.993-1.201 8.731-1.117 10.079-.028.056 4.022.028 5.42-.028z"
        fill="#1D2939"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.34 21.087l3.89-.059.529-4.906-3.778.498-.64 4.467zm-1.721.026l.418-4.237-3.645.48.22-2.194 3.626-.318.432-4.37-3.597.054-1.061 10.64 3.607-.055zm3.248-10.672l3.51-.053-.427 3.956-3.689.323.606-4.226z"
        fill="#039855"
      />
      <path
        d="M12.767 10.135c-.307-.112-2.906-1.151-3.129-2.442-.056-.281 0-.73.503-1.152.28-.224.53-.336.81-.336 1.453-.029 2.123 2.947 2.263 3.537l-.447.393zm-1.788-3.257c-.112 0-.252.057-.391.197-.28.224-.28.393-.28.505.084.562 1.174 1.236 2.096 1.657-.308-1.123-.866-2.359-1.425-2.359z"
        fill="#1D2939"
      />
      <path
        d="M12.6 9.939l-.112-.197c.111-.59.698-3.594 2.15-3.622.28 0 .56.113.839.31.503.392.586.841.53 1.122-.167 1.292-2.933 2.415-3.212 2.527l-.196-.14zm2.039-3.117c-.56 0-1.062 1.264-1.37 2.415.923-.45 1.984-1.151 2.04-1.713.028-.112 0-.28-.28-.505-.139-.14-.279-.197-.39-.197z"
        fill="#1D2939"
      />
      <path
        d="M12.683 10.22s-1.173-.955-3.269-.9l-.027-.673c2.374-.056 3.687.983 3.743 1.039l-.447.533z"
        fill="#1D2939"
      />
      <path
        d="M12.683 10.22l-.419-.534c.056-.056 1.453-1.123 4.05-1.151v.674c-2.346.028-3.603 1.01-3.63 1.01z"
        fill="#1D2939"
      />
      <path
        d="M25.925 7.44V3.762c0-.842 0-1.656-.056-2.499-.028-.28 0-.59-.112-.842-.028-.084-.056-.14-.084-.196-.028-.028-.028-.057-.056-.085-.111-.112 0-.056.028.085-.028-.281-.586-.281-.558 0 0-.169.055-.169 0-.057-.056.085-.056.14-.084.225-.056.253-.028.562-.028.814.056.814.14 1.657.251 2.47.14 1.264.308 2.528.475 3.79 0 .085.224.085.224-.027zM23.047 6.401c-.223-.758-.447-1.516-.67-2.246-.084-.309-.42-2.077-1.145-1.937-.922.196 1.368 3.734 1.62 4.24.028.083.223.055.195-.057zM20.058 7.89l-2.263-2.78c-.502-.59-.977-1.208-1.508-1.797a3.74 3.74 0 00-.587-.562c-.056-.056-.14-.084-.223-.14-.028 0-.084-.028-.112-.028-.251-.056.168.112.14.084-.196-.196-.643 0-.447.197-.112-.113-.028-.197-.028-.056 0 .056.056.14.084.196.111.225.307.421.474.618.531.59 1.09 1.15 1.677 1.712.866.87 1.76 1.74 2.654 2.611.055.084.223.028.14-.056zM29.333 6.345c.252-.505 2.542-4.043 1.62-4.24-.726-.14-1.033 1.545-1.117 1.825-.251.787-.475 1.573-.698 2.359-.056.112.167.168.195.056zM32.462 8.086c.894-.899 1.816-1.797 2.738-2.724.614-.617 1.229-1.235 1.815-1.853.196-.196.42-.449.531-.673.028-.057.084-.113.084-.197v-.084c0-.169 0 .056-.028.084.196-.225-.28-.421-.475-.225.112-.112.335-.14.112-.084a.872.872 0 00-.28.14c-.223.141-.419.366-.586.562a36.617 36.617 0 00-1.676 1.965c-.81.983-1.62 1.994-2.43 2.976-.085.113.111.197.195.113zM36.652 9.152c.894-.42 1.788-.814 2.682-1.207.363-.168 2.403-.898 2.011-1.404-.474-.617-4.302 2.134-4.832 2.471-.084.084.028.197.14.14zM25.673 34.869v3.51c0 .785 0 1.6.056 2.386.028.252 0 .561.112.814.028.056.056.14.084.196 0 .029.028.057.056.085.111.112 0 .056-.028-.085.028.253.586.253.558 0 0 .14-.055.169 0 .057.028-.057.056-.14.084-.225.056-.253.028-.533.028-.786a33.742 33.742 0 00-.251-2.358c-.14-1.208-.308-2.415-.475-3.622-.028-.084-.252-.084-.224.028zM28.55 35.852c.224.73.448 1.431.671 2.161.084.281.42 1.994 1.174 1.853.922-.168-1.37-3.565-1.62-4.042-.057-.113-.252-.085-.224.028zM32.127 34.336l2.43 2.863a50.24 50.24 0 001.62 1.825c.168.197.364.421.615.562.084.056.14.084.223.14.028 0 .084.028.112.028.252.056-.167-.112-.14-.084.196.224.699 0 .475-.197.112.113.028.197.028.056 0-.056-.056-.14-.084-.196-.111-.225-.307-.421-.502-.618a53.725 53.725 0 00-1.788-1.769c-.95-.898-1.9-1.796-2.822-2.695-.056-.084-.251 0-.167.085zM35.926 33.437c.81.477 1.592.955 2.375 1.432.335.197 1.9 1.348 2.402.983.559-.393-1.564-1.208-1.844-1.32-.922-.421-1.871-.814-2.793-1.207-.112-.056-.224.056-.14.112zM22.237 35.908c-.251.477-2.542 3.874-1.62 4.042.726.14 1.034-1.46 1.117-1.74.252-.758.475-1.516.699-2.274.056-.084-.14-.112-.196-.028zM19.108 34.251c-.894.87-1.816 1.741-2.737 2.611-.615.59-1.23 1.18-1.816 1.769-.196.197-.42.421-.531.646l-.084.168v.084c0 .169 0-.056.028-.084-.195.225.28.421.475.197-.112.112-.335.14-.112.084.112-.028.196-.084.28-.14.223-.14.419-.365.586-.534a50.622 50.622 0 001.676-1.88l2.43-2.864c.085-.057-.11-.14-.195-.057zM14.918 33.213c-.894.393-1.788.758-2.682 1.15-.363.17-2.402.871-2.011 1.348.475.59 4.302-2.05 4.833-2.358.111-.056-.028-.197-.14-.14z"
        fill="#039855"
      />
    </svg>
  );
}

function Search(props: HTMLAttributes<SVGElement>) {
  return (
    <svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.167 15.833a6.667 6.667 0 100-13.333 6.667 6.667 0 000 13.333zM17.5 17.5l-3.625-3.625"
        stroke="#98A2B3"
        strokeWidth={1.66667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
