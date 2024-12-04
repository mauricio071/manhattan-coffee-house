import { useEffect, useState } from "react";
import {
  BtnToTop,
  Contacts,
  Footer,
  HeaderSection,
  Line,
  Navbar,
  NavbarContent,
  Schedules,
  Section,
  TitleFilled,
  Wrapper,
} from "./App.styled";
import logo from "./assets/logo.png";
import btnTopo from "./assets/seta-para-cima.png";
import parallaxImage2 from "./assets/parallax-imagem2.jpg";
import parallaxImage3 from "./assets/parallax-imagem3.jpg";
import parallaxImage4 from "./assets/parallax-imagem4.png";
import cafeteriaImg from "./assets/cafeteria.jpg";
import { Menu } from "./components/icon/Menu";

function App() {
  const [showButton, setShowButton] = useState(false);
  const [visible, setVisible] = useState(false);

  const checkScrollTop = () => {
    if (!showButton && window.pageYOffset > 500) {
      setShowButton(true);
    } else if (showButton && window.pageYOffset <= 500) {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);

    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showButton]);

  return (
    <div>
      <Navbar>
        <NavbarContent $visible={visible.toString()}>
          <a href="#">
            <img src={logo} alt="logo" />
          </a>
          <Menu onClick={() => setVisible(!visible)} />
          <ul>
            <li>
              <a href="#info" onClick={() => setVisible(!visible)}>INFORMAÇÕES</a>
            </li>
            <li>
              <a href="#contacts" onClick={() => setVisible(!visible)}>CONTATOS</a>
            </li>
            <li>
              <a href="#schedules" onClick={() => setVisible(!visible)}>HORÁRIOS</a>
            </li>
          </ul>
        </NavbarContent>
      </Navbar>
      <HeaderSection>
        <h1>MANHATTAN - COFFEE HOUSE</h1>
      </HeaderSection>
      <Section id="info">
        <Wrapper>
          <h2>EXPERIMENTE O MELHOR CAFÉ DA CIDADE!</h2>
          <p>
            O café não é uma simples bebida que foi preparada por alguém. O café
            é momento e nós mostraremos isso. Frases como “Que tal tomarmos um
            café?” ou até então “Vamos fazer um café?” são demonstrações de que
            um dos momentos que mais reforçam os laços para com o próximo está
            finalmente por acontecer. Fraco ou forte? Com ou sem açúcar? Você
            deseja açúcar ou adoçante? Estas são frases que ouvimos em vários
            lugares. Em quase todos os locais onde há pessoas há também café.
            Parecemos intrínsecos ao café. Aqui na Manhattan serviremos para
            você com muito carinho o nosso querido e amado Amaro’s Coffee
            diretamente do nosso cafezal em Minas Gerais. Para todos nós, café é
            coisa séria e merece todo o cuidado.
          </p>
        </Wrapper>
      </Section>
      <Section $parallaximage={parallaxImage2}>
        <Wrapper $parallax="true">
          <h3>Um bom café é motivo de alegria!</h3>
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <h2>O QUE É O CAFÉ MANHATTAN?</h2>
          <p>
            Segundo a Metodologia de Avaliação Sensorial da SCA (Specialty
            Coffee Association), usada no mundo todo, um café especial é todo
            aquele que atinge, no mínimo, 80 pontos na escala de pontuação da
            metodologia (que vai até 100). O Café Manhattan destaca-se nos
            atributos fragrância, corpo, harmonia, doçura e sabor, nesse caso,
            possuindo sabores e aromas que podem ser frutados, herbais, doces
            como caramelo e chocolate. Podemos fazer uma analogia com o vinho,
            pois o café Manhattan também pode ser apreciado por suas
            características sensoriais e não apenas pela cafeína. Através do
            excelente padrão de cultivo, cuidado pós-colheita e da torra, você
            poderá experimentar diferentes e deliciosos tipos de café.
          </p>
        </Wrapper>
      </Section>
      <Section $parallaximage={parallaxImage3}>
        <Wrapper $parallax="true">
          <h3>A vida só começa depois do café!</h3>
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <h2>CONHEÇA O CAFÉ GOURMET MANHATTAN?</h2>
          <p>
            As características desse tipo do café gourmet da Manhattan são muito
            marcantes. O seu corpo vai depender da variedade do blend: quanto
            mais “pesado” ele for na boca, maior o corpo. Quanto menor a sua
            pesagem, menor o corpo. O nosso café gourmet é o mais bem avaliado
            no processo de produção, para que ele não venha com nenhum tipo de
            defeito. O aroma é bem perceptível e o consumidor consegue sentir
            nitidamente, sendo que ele pode variar entre 4 aromas: florado,
            cítrico, achocolatado, frutado. Essas variações são consequências
            dos grãos do tipo Arábica. Tudo isso vai depender da torra, quanto
            mais clara ela for, maior será a acidez.
          </p>
        </Wrapper>
      </Section>
      <Section id="contacts" $parallaximage={parallaxImage4}>
        <Wrapper>
          <TitleFilled>Contatos & Endereço</TitleFilled>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.117737377575!2d-43.36284829999999!3d-22.982697599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda2a689aeccd%3A0xa51f3be0d88fc0f!2sAv.%20Ayrton%20Senna%2C%203000%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022775-904!5e0!3m2!1spt-BR!2sbr!4v1733151751357!5m2!1spt-BR!2sbr"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <Contacts>
            <p>Telefone & Whatsapp: (21) 99999-5555</p>
            <p>E-mail: contato@manhattan.com.br</p>
            <p>
              Endereço: Av Ayrton Senna, 3000 - Barra da Tijuca - Rio de Janeiro
            </p>
          </Contacts>
        </Wrapper>
      </Section>
      <Section id="schedules" $parallaximage={cafeteriaImg}>
        <Wrapper>
          <h2>HORÁRIOS DE FUNCIONAMENTO</h2>
          <Schedules>
            <li>
              <h3>SEGUNDA</h3>
              <Line />
              <p>09:00 - 20:00</p>
            </li>
            <li>
              <h3>TERÇA</h3>
              <Line />
              <p>09:00 - 20:00</p>
            </li>
            <li>
              <h3>QUARTA</h3>
              <Line />
              <p>09:00 - 20:00</p>
            </li>
            <li>
              <h3>QUINTA</h3>
              <Line />
              <p>09:00 - 20:00</p>
            </li>
            <li>
              <h3>SEXTA</h3>
              <Line />
              <p>09:00 - 22:00</p>
            </li>
            <li>
              <h3>SÁBADO</h3>
              <Line />
              <p>09:00 - 22:00</p>
            </li>
            <li>
              <h3>DOMINGO</h3>
              <Line />
              <p>FECHADO</p>
            </li>
          </Schedules>
        </Wrapper>
      </Section>
      <Footer>
        <p>&copy; Manhattan - Coffee House - Todos os direitos reservados</p>
        <p>
          Desenvolvido por <span>Maurício Naoki</span>
        </p>
      </Footer>
      <BtnToTop href="#" $showbutton={showButton}>
        <img src={btnTopo} alt="seta" />
      </BtnToTop>
    </div>
  );
}

export default App;
