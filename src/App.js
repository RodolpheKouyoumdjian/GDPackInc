import './App.css';
import './styles.css'
import Card from './components/card'
import Contact from './components/contact'

const paths = ['925.jpg', '953.jpg', '954.jpg', '956.jpg', '959.jpg', '964.png', '970.jpg', '972.jpg', '985.jpg', '986.jpg', '998.jpg', '999.jpg', '1005.png', '1012.jpg', '1013.jpg', '1016.jpg', '1018.jpg', '1045.jpg', '1048.png', '1051.png', '1052.jpg', '1053.png', '1054.jpg', '1060.jpg', '1062.jpg', '1063.png', '1064.jpg', '1066.jpg', '1068.jpg', '1069.jpg', '1072.jpg', '1073.png', '1079.jpg', '1082.jpg', '1083.jpg', '1084.jpg', '1085.jpg', '1086.jpg', '1095.jpg', '1100.jpg', '1111.png']
const descriptions = ['CAFE EXPRESS PAILLES 8" REGULIER 500/PK X 9 PK/CS ',
'CONTENANT REFERMABLE EN BAGASSE 6" x 6" 50/PQT x 5/CS (1091385) ',
'CONTENANT REFERMABLE EN BAGASSE 6" x 9" 50/PQT x 2/CS (1111582) ',
'CONTENANT REFERMABLE EN BAGASSE 9" x 9" 50/PQT x 2/CS (1111641) ',
'IECO BOITE EN PAPIER KRAFT & ENDUIT PLA #1 (11 X 9 X 6.3CM) 300/CS (1377865)',
'CAFE EXPRESS BOITE EN PAPIER KRAFT & ENDUIT PE #3 (19.7 X 14 X 6.3CM) 200/CS',
'CAFE EXPRESS BOITE EN PAPIER KRAFT & ENDUIT PE #4 (20 X 14 X 9CM) 160/CS',
'CAFE EXPRESS BOITE EN PAPIER KRAFT & ENDUIT PE #8 (15.2 X 11.8 X 6.2CM) 200/CS',
'TITAN CONTENANT EN PP 2OZ 300/PK x 4PK/CS (1200/CS)(1088782) ',
'TITAN COUVERCLE POUR CONTENANT 2 oz 300/PK x 4PK/CS (1200/CS)(1088770) ',
'CONTENEUR RECTANGULAIRE TRANSPARENT PP 750ml a/COUV 300/CS (1092158) ',
'CONTENEUR ROND TRANSPARENT PP 750ml a/COUV 300/CS (1301101) ',
'CONTENANT ROND POUR EMPORTER A BASE CLAIRE 650ml AVEC COUVERCLE 50/PK ',
'CONTENANT RECTANGULAIRE POUR EMPORTER A BASE NOIRE 1000ml AVEC ',
'CONTENANT ROND POUR EMPORTER A BASE NOIRE 1000ml AVEC COUVERCLE 50/PK ',
'CONTENANT RECTANGULAIRE POUR EMPORTER A BASE NOIRE 1000ml AVEC ',
'CONTENANT RECTANGULAIRE POUR EMPORTER A BASE CLAIRE 1250ml AVEC ',
'TITAN TABLE A VAPEUR DEMI TAILLE PEU PROFOND EN ALUM 100/CS ',
'TITAN TABLE A VAPEUR DEMI TAILLE PROFONDE EN ALUM 10/PQT X 10/CS ',
'TITAN TABLE A VAPEUR PROFONDES EN ALUM 5/PK X 10/CS ', 'TITAN CONTENANTS RONDS 9" EN ALUMINIUM 500/CS ',
'TITAN FOIL CONTENANTS RONDS 9" EN ALUMINIUM 125/PQT X 4/CS ',
'COUVERCLES EN DOME POUR CONT. 9" RONDS 125/PQT X 4/CS',
'TITAN COUVERCLES POUR TABLE A VAPEUR DEMI TAILLE 10/PQT X 10/CS',
'STOBIA CONTENANTS RONDS 8" EN ALUMINIUM 500/CS (1282791) ',
'STOBIA FOIL CONTENANTS RONDS 8" EN ALUMINIUM 125/PQT X 4/CS ',
'COUVERCLES EN DOME POUR CONT. 8" RONDS 125/PQT X 4/CS (1403537) ',
'TITAN FOIL CONTENANTS OBLONGS 1 LIVRE 125/PQT X 4/CS (1390363) ',
'COUVERCLES POUR CONTENANTS TITAN FOIL 1 LIVRE 125/PQT X 4/CS (1399613) ',
'TITAN FOIL CONTENANTS OBLONGS 900ML 125/PQT X 4/CS ',
'TITAN FOIL CONTENANTS OBLONGS 2.25 LIVRES 125/PQT X 4/CS (1386222) ',
'COUVERCLES EN DOME POUR CONT TITAN FOIL 2.25 LIVRE OBLONG 125/PK X 4/CS ',
'TITAN PAPIER PARCHEMIN 16.4" X 24.4" 1000/CS (1304076) ', 'SACS A PAPIER KRAFT #10 500/CS (1327560) ',
'SACS A PAPIER KRAFT #20 500/CS (1327561) ', 'SACS A PAPIER KRAFT #3 500/CS (1327488) ',
'SACS A PAPIER KRAFT #5 500/CS (1327546) ', 'EMBALLAGE PAPIER D\'ALUMINIUM - 10.5" x 13" - 2500/CS (346097) ',
'SUAVE SERVIETTES DE DINER 1 PLI 1/8 PLIER 12X250/PQ (1319253) ',
'SUAVE SERVIETTE POUR DISTRIBUTRICE JUNIOR 500/PK X 18/CS (193173)(833342) ',
'SUAVE PREMIUM 2 PLY JUMBO PAPIER HYGIENIQUE 8/CS (1300500) (1113083) ']

var zip = [];
zip = paths.map(function(e, i, a) {
  return [e, descriptions[i]]
})

function App() {
  return (
    <div className="App">
      <div className="container">

        <div class="navbar">
            <ul>
                <li><a href="#products">
                    Produits
                </a></li>
                <li><a href="#contact">
                    Contact
                </a></li>
            </ul>
        </div>

        <div className="content">
          <section id="products">
            {
              zip.map(elem => (
                <Card source={'./products/' + elem[0]} description={elem[1]}/>
              ))
            }
          </section>
        </div>
        <section id="contact">
                <Contact/>
        </section>
      </div>
      <p>
      </p>
      
    </div>
  );
}

export default App;
