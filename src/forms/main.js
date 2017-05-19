import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import {MdRestaurant, MdDirectionsRun, MdLink, MdChevronRight, MdInfoOutline} from 'react-icons/lib/md';
import {List, ListItem} from 'material-ui/List';
import {cyan500} from 'material-ui/styles/colors';

const styles = {
  checkbox: {
    marginBottom: 16,
    marginTop: 16,
    marginLeft: 20
  },
  button: {
    margin: 20,
  },
  buttonExercise: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
  },
  buttonRecept: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 5,
    marginRight: 5,
    fontSize: 14,
  },
  iconResultStyle: {
    cursor: 'pointer', 
    margin:'0px auto', 
    display:'block'
  },
  headerStyle: {marginLeft: 20, marginTop: 20, paddingTop: 10, marginBottom: 10},
  metaStyle: {marginLeft: 20, marginBottom: 30},
  cardStyle: {marginBottom: 20},
  linkDivStyle: {marginBottom: 20},
  linkStyle: {color: cyan500, textDecoration: 'none',fontSize: '11pt',fontWeight: 'bold'},
  imgStyle: {width: 200, margin: '0 auto'},
  dialogStyle: {width: '100%',  maxWidth: '750'}
};

const DialogTypes = {
  Info: {
    WHAT: 'Wat is het?',
    RECOGNIZE: 'Hoe te herkennen?',
    CONSEQUENCES: 'Gevolgen',
    RISCS: 'Risicofactoren',
    PREVENT: 'Hoe te vermijden?',
    STATS: 'Enkele cijfers',
  },
  Food: {
    RECEPT1: 'Aardappelcurry met boontjes',
    RECEPT2: 'Aardappel-zalmhamburgers',
    RECEPT3: 'Stoofp. kip en kikkererwten',
  },
  Movement: {
    SIT_UPS: 'SIT_UPS',
    PUSH_UPS: 'PUSH_UPS',
    SQUATS: 'SQUATS',
  }
}

const CustomListItem = (props)=> (
  <ListItem style={{fontSize: 14}} leftIcon={<MdChevronRight/>} {...props}/>
);

const DialogContentSitUps = () => (
  <div style={{marginTop: 20}}>
    <div style={styles.imgStyle}>
      <img style={{width: '100%'}} alt="sit-ups" src="images/situps.jpg"/>
    </div>
    <List>
      <CustomListItem primaryText="Kies een platte vloer uit."/>
      <CustomListItem primaryText="Ga met je rug plat op de grond liggen"/>
      <CustomListItem primaryText="Houd niet je nek vast, maar houd je handen naast je hoofd en kom omhoog"/>
      <CustomListItem primaryText="Kom zover omhoog tot je ellebogen je knieen raken"/>
      <CustomListItem primaryText="Laat je langzaam weer zakken, zonder dat je rug de vloer raakt"/>
      <CustomListItem primaryText="Herhaal voor het gewenst aantal reps"/>
    </List>
  </div>
);

const DialogContentPushUps = () => (
  <div style={{marginTop: 20}}>
    <div style={styles.imgStyle}>
      <img style={{width: '100%'}} alt="push-ups" src="images/pushup.jpg"/>
    </div>
    <List>
      <CustomListItem primaryText="Neem een Push Up positie aan en plaats de handen dit keer dichterbij elkaar dan schouderbreedte"/>
      <CustomListItem primaryText="Laat jezelf zakken totdat je borst bijna de grond raakt"/>
      <CustomListItem primaryText="Duw jezelf nu weer omhoog"/>
      <CustomListItem primaryText="Herhaal voor het gewenste aantal reps"/>
    </List>
  </div>
);

const DialogContentSquat = () => (
  <div style={{marginTop: 20}}>
    <div style={styles.imgStyle}>
      <img style={{width: '100%'}} alt="push-ups" src="images/squat.jpg"/>
    </div>
    <List>
      <CustomListItem primaryText="Ga staan met je voeten iets wijder staan dan schouderbreedte"/>
      <CustomListItem primaryText="Houd je borst recht omhoog en kijk voor je uit"/>
      <CustomListItem primaryText="Dit is de beginpositie van de oefening"/>
      <CustomListItem primaryText="Laat je langzaam door je knieen zakken, alsof je gaat zitten op een kruk, bal of stoel"/>
      <CustomListItem primaryText="Strek je armen voor je uit wanneer je de neergaande beweging maakt"/>
      <CustomListItem primaryText="Leg bij het zakken je lichaamsgewicht op je hielen"/>
      <CustomListItem primaryText="Blijf voor je uit kijken terwijl je naar beneden zakt"/>
      <CustomListItem primaryText="Kom parallel met de grond en druk vervolgens met je hielen jezelf weer omhoog"/>
      <CustomListItem primaryText="Breng je armen weer naar beneden bij het omhoog komen"/>
      <CustomListItem primaryText="Zorg ervoor dat je knieen niet op slot gaan wanneer je bovenin komt"/>
      <CustomListItem primaryText="Herhaal voor het gewenste aantal reps"/>
    </List>
  </div>
);

const DialogContentRecept1 = () => (
  <div style={{marginTop: 20}}>
    <Card style={styles.cardStyle}>
      <CardHeader
        title="Ingrediënten"
        subtitle="Nodig voor 4 personen"
      />
      <CardText>
        <List>
          <CustomListItem primaryText="800 gram zoete aardappel (bataat), geschild en in stukjes gesneden"/>
          <CustomListItem primaryText="4 middelgrote schoongemaakte wortelen in plakjes gesneden"/>
          <CustomListItem primaryText="2 dunne preien in ringen gesneden"/>
          <CustomListItem primaryText="2 blikken (400 g) zwarte boontjes (uitlekt gewicht ca. 265 gram)"/>
          <CustomListItem primaryText="1 eetlepel currypasta"/>
          <CustomListItem primaryText="100 ml kokosmelk"/>
          <CustomListItem primaryText="1 bio limoen"/>
          <CustomListItem primaryText="6 takjes koriander"/>
        </List>
      </CardText>
      <CardHeader title="Bereidingswijze"/>
      <CardText>
        <List>
          <CustomListItem primaryText="Fruit de prei in de olie met de currypasta."/>
          <CustomListItem primaryText="Voeg de blokjes aardappel en wortel toe en roer goed om."/>
          <CustomListItem primaryText="Voeg een bodempje water toe en stoof de groente gaar."/>
          <CustomListItem primaryText="Laat de zwarte boontjes uitlekken, spoel ze af onder koud stromend water en schep ze samen met de kokosmelk door de gestoofde groenten. Warm alles goed door"/>
          <CustomListItem primaryText="Breng het gerecht op smaak met wat geraspte limoenschil, limoensap en kleingesneden koriander"/>
        </List>
      </CardText>
      <CardHeader title="Voedingswaarden"/>
      <CardText>
        <List>
          <CustomListItem primaryText="Bevat per persoon: +/- 500 kcal en 60 g koolhydraten = 4,75 KH-ruilwaarden"/>
        </List>
      </CardText>
    </Card>
  </div>
);

const DialogContentRecept2 = () => (
  <div style={{marginTop: 20}}>
    <Card style={styles.cardStyle}>
      <CardHeader
        title="Ingrediënten"
        subtitle="Nodig voor 4 personen"
      />
      <CardText>
        <List>
          <CustomListItem primaryText="450 g aardappelen geschild"/>
          <CustomListItem primaryText="100 ml halfvolle melk"/>
          <CustomListItem primaryText="peper, (zout) en muskaatnoot"/>
          <CustomListItem primaryText="3 eetlepels vloeibare vetstof"/>
          <CustomListItem primaryText="2 stronken witloof (200 g)"/>
          <CustomListItem primaryText="sap van 1/2 citroen"/>
          <CustomListItem primaryText="50 g paneermeel"/>
          <CustomListItem primaryText="30 g Parmezaanse kaas"/>
          <CustomListItem primaryText="1 eetlepel gehakte peterselie"/>
          <CustomListItem primaryText="75 g gerookte zalm in sneetjes"/>
          <CustomListItem primaryText="1 eiwit"/>
        </List>
      </CardText>
      <CardHeader title="Bereidingswijze"/>
      <CardText>
        <List>
          <CustomListItem primaryText="Kook de aardappelen en pureer ze samen met de melk"/>
          <CustomListItem primaryText="Kruid met peper, zout en muskaatnoot"/>
          <CustomListItem primaryText="Maak het witloof schoon en snijd het heel fijn"/>
          <CustomListItem primaryText="Stoof afgedekt gaar in 1 eetlepel hete vetstof"/>
          <CustomListItem primaryText="Kruid met peper (en zout), laat goed uitlekken en afkoelen"/>
          <CustomListItem primaryText="Meng het onder de puree"/>
          <CustomListItem primaryText="Snipper de gerookte zalm fijn en meng deze eveneens onder de puree"/>
          <CustomListItem primaryText="Vorm 8 platte hamburgertjes van +/- 75 g elk"/>
          <CustomListItem primaryText="Klop het eiwit los met wat peper (en zout)"/>
          <CustomListItem primaryText="Meng het paneermeel met de Parmezaanse kaas en de peterselie"/>
          <CustomListItem primaryText="Wentel de hamburgertjes eerst door het eiwit en dan lichtjes door het paneermeelmengsel"/>
          <CustomListItem primaryText="Bak in een anti-kleefpan in de overige vetstof"/>
        </List>
      </CardText>
      <CardHeader title="Voedingswaarden"/>
      <CardText>
        <List>
          <CustomListItem  primaryText="Per persoon: 280 kcal - 2,5 Kh-waarde (dit is zonder geserveerde gekookte aardappels: reken 1 extra Kh-waarde per 70 g gekookte aardappel)"/>
        </List>
      </CardText>
    </Card>
  </div>
);

const DialogContentRecept3 = () => (
  <div style={{marginTop: 20}}>
    <Card style={styles.cardStyle}>
      <CardHeader
        title="Ingrediënten"
        subtitle="Nodig voor 4 personen"
      />
      <CardText>
        <List>
          <CustomListItem primaryText="4 middelgrote tomaten (600g)"/>
          <CustomListItem primaryText="1 courgette (500g)"/>
          <CustomListItem primaryText="2 sjalotten"/>
          <CustomListItem primaryText="500g kippenfilet"/>
          <CustomListItem primaryText="1 blik kikkererwten (300g)"/>
          <CustomListItem primaryText="100ml kippenbouillon (blokje) of kippenfond"/>
          <CustomListItem primaryText="4 eetlepels olijfolie"/>
          <CustomListItem primaryText="enkele takjes rozemarijn"/>
          <CustomListItem primaryText="kippenkruiden"/>
        </List>
      </CardText>
      <CardHeader title="Bereidingswijze"/>
      <CardText>
        <List>
          <CustomListItem primaryText="Snijd de kippenfilet in gelijke stukken en bestrooi ze met de kippenkruiden."/>
          <CustomListItem primaryText="Verhit 2 eetlepels olijfolie in een pan en bak hierin de kippenblokjes aan alle zijden licht bruin."/>
          <CustomListItem primaryText="Snijd de sjalotten in halve ringen en de courgette en de tomaten in gelijke stukken."/>
          <CustomListItem primaryText="Stoof de sjalot aan in de resterende olijfolie en voeg er de courgette-, tomaten- en kippenblokjes aan toe. Kruid met peper en zout en de takjes rozemarijn."/>
          <CustomListItem primaryText="Voeg de kippenbouillong toe en laat 15 min. sudderen."/>
          <CustomListItem primaryText="Giet de kikkererwten uit in een vergiet en spoel ze af onder stromend water."/>
          <CustomListItem primaryText="Voeg ze de laatste 5 min. toe."/>
          <CustomListItem primaryText="Serveer dit stoofpotje met grof boerenbrood."/>
        </List>
      </CardText>
      <CardHeader title="Voedingswaarden"/>
      <CardText>
        <List>
          <CustomListItem primaryText="Bevat per persoon: 350 kcal - 16g KH = 1,25 KHRW"/>
        </List>
      </CardText>
    </Card>
  </div>
);

const DialogContentInfoWhat = () => (
  <div style={{marginTop: 20}}>
    <Card style={styles.cardStyle}>
      <CardText>
        <span>
            Diabetes Mellitus type 2 is één van de meest voorkomende chronische aandoeningen. Bij deze ziekte zijn er 2 problemen, enerzijds kunnen specifieke cellen in de pancreas (&#946;-cellen) niet voldoende insuline meer aanmaken, anderzijds is de werking van deze insuline verminderd waardoor ons lichaam resistent wordt tegen onze eigen gemaakte insuline. (Domus Medica, 2016)
        </span>
      </CardText>
    </Card>
  </div>
)
const DialogContentInfoRecognize = () => (
  <div style={{marginTop: 20}}>
    <Card style={styles.cardStyle}>
      <CardText>
        <span>Deze ziekte is soms moeilijk te herkennen. De meest voorkomende symptomen zijn</span>
        <br/>
        <br/>
        <span><MdChevronRight/> frequent moeten plassen</span>
        <br/>
        <span><MdChevronRight/> vermoeidheid</span>
        <br/>
        <span><MdChevronRight/> veel gewichtsverlies</span>
        <br/>
        <span><MdChevronRight/> een verhoogd dorstgevoel (International Diabetes Fonds, 2016)</span>
        <br/>
        <br/>
        <span>Als u deze tekenen bij uzelf waarneemt is het aangeraden de huisarts te contacteren.</span>
      </CardText>
    </Card>
  </div>
)
const DialogContentInfoRiscs = () => (
  <div style={{marginTop: 20}}>
    <Card style={styles.cardStyle}>
      <CardText>
        <span>De allerbelangrijkste factoren die bijdragen tot het ontwikkelen van diabetes type 2 zijn een te <strong>hoog lichaamsgewicht</strong> en een <strong>ongezonde levensstijl</strong> waaronder roken, ongezonde voeding en weinig lichaamsbeweging (Gezondheid, 2013).
        Als u deze factoren bezit is het aangeraden om verder een kijkje te nemen op deze applicatie.
        </span>
        <br/>
        <br/>
        <span>Belangrijk om te weten:</span>
        <br/>
        <span><MdChevronRight/> Als u overgewicht hebt en het lichaamsgewicht met voldoende lichaamsbeweging en gezonde voeding met 5% kan laten dalen, dan daalt de kans op diabetes type 2 met 30%</span>
        <br/>
        <span><MdChevronRight/> Ook als u rookt en beslist te stoppen, dan daalt de kans op diabetes type 2 met 50%.</span>
      </CardText>
    </Card>
  </div>
)
const DialogContentInfoConsequences = () => (
  <div style={{marginTop: 20}}>
    <Card style={styles.cardStyle}>
      <CardText>
        <span>Doordat ons lichaam resistent wordt tegen onze insuline krijgen we een hogere bloedglucosespiegel, deze wordt bepaald door de hoeveelheid ‘suiker’ in ons bloed (hoeveelheid glucose dat is opgelost in  ons bloed). Als deze te hoog is kan dit ernstige gevolgen hebben voor ons lichaam. Zo is er bijvoorbeeld meer kans op hart- en vaatziekten, voetcomplicaties, problemen met de nieren, ogen en onze         zenuwen. (Diabetes Liga, 2016) Ook is er een verhoogde kans op overlijden.
        </span>
        <br/>
        <span>Uit onderzoek is gebleken dat mensen met diabetes type 2 meer kans hebben op een depressie, cognitieve stoornissen, schizofrenie en seksuele dysfunctie. (Rutten et al., 2013)</span>
      </CardText>
    </Card>
  </div>
)
const DialogContentInfoPrevent = () => (
  <div style={{marginTop: 20}}>
    <Card style={styles.cardStyle}>
      <CardText>
        <span>Met voldoende beweging, gezonde voeding en minderen of stoppen met roken (als u alle risicofactoren bezit) kan diabetes type 2 vermeden worden (Rutten et al., 2013).
        </span>
      </CardText>
    </Card>
  </div>
)
const DialogContentInfoStats = () => (
  <div style={{marginTop: 20}}>
    <Card style={styles.cardStyle}>
      <CardText>
        <span>
          In 2015 zijn er wereldwijd 415 miljoen mensen met de diagnose van diabetes vastgesteld, uit onderzoek blijkt dat deze nog zal stijgen dat 642 miljoen mensen tegen het jaar 2020. (Internationaal Diabetes Fonds, 2016).
        </span>
        <br/>
        <span>
          Meer en meer jongeren lijden aan diabetes type 2, dit aantal is verdriedubbeld ten opzichte van 20 jaar geleden (Skau, et al., 2016). Dit komt door onze welvaart, langere levensverwachting en ongezondere levensstijl (Domus Medica, 2017). 
        </span>
        <br/>
        <span>
          Tegen 2030 zal 1 op de 10 mensen gediagnosticeerd zijn met diabetes.
        </span>
        <br/>
        <span>
          Ook komt overgewicht meer en meer voor op jongere leeftijd, het percentage van jongeren met overgewicht in het Vlaamse Gewest bevat 16%. Deze ligt hoger bij jongens dan bij meisjes (Vigez,2017).
        </span>
      </CardText>
    </Card>
  </div>
)

class MainComponent extends Component {
  constructor(){
    super();
    this.state = {open: false};
  }
  handleClose = () => {
    this.setState({open: false});
  }
  handleOpen = (dialogTitle, dialogType) => {
    this.setState({open: true, dialogTitle, dialogType: dialogType || dialogTitle});
  }
  _renderPaper(){
    return (
      <Paper zDepth={2}>
        <div style={{padding: 20}}>
          <Card style={styles.cardStyle}>
            <CardHeader
              title="Info"
              subtitle="Informatie omtrent diabetes type 2"
              avatar={<MdInfoOutline size={30}/>}
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText expandable={true}>
              <RaisedButton
                label={DialogTypes.Info.WHAT}
                onClick={() => this.handleOpen(DialogTypes.Info.WHAT,DialogTypes.Info.WHAT)}
                style={styles.buttonRecept}/>
              <RaisedButton
                label={DialogTypes.Info.RECOGNIZE}
                onClick={() => this.handleOpen(DialogTypes.Info.RECOGNIZE)}
                style={styles.buttonRecept}/>
              <RaisedButton
                label={DialogTypes.Info.CONSEQUENCES}
                onClick={() => this.handleOpen(DialogTypes.Info.CONSEQUENCES)}
                style={styles.buttonRecept}/>
              <RaisedButton
                label={DialogTypes.Info.RISCS}
                onClick={() => this.handleOpen(DialogTypes.Info.RISCS)}
                style={styles.buttonRecept}/>
             <RaisedButton
                label={DialogTypes.Info.PREVENT}
                onClick={() => this.handleOpen(DialogTypes.Info.PREVENT)}
                style={styles.buttonRecept}/>
              <RaisedButton
                label={DialogTypes.Info.STATS}
                onClick={() => this.handleOpen(DialogTypes.Info.STATS)}
                style={styles.buttonRecept}/>
            </CardText>
          </Card>
          <Card style={styles.cardStyle}>
            <CardHeader
              title="Voedingsadvies"
              subtitle="Info & Recepten"
              avatar={<MdRestaurant size={30}/>}
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardTitle title="Info" expandable={true} />
            <CardText expandable={true}>
              <span>
                {
                  'Jongeren en volwassenen eten tegenwoordig meer en meer energierijke snacks, drinken meer energierijke dranken, minder fruit en groenten en meer meeneemmaaltijden (Vigez, 2017). Met deze optie wil ik makkelijke en gezonde alternatieven aanbieden in plaats van deze energierijke en calorievolle maaltijden en dranken. Het percentage van jongeren met overgewicht bevat 14% in het Vlaams Gewest, dit is meer dan de vorige jaren (Vigez, 2017). Het voedingsadvies in deze app is gebaseerd op de actieve voedingsdriehoek, deze is de leidraad doorheen de gezonde voeding.'
                }
              </span>
              <br/>
              <span>
                {
                  'Hierin wordt de actieve voedingsdriehoek uitgebeeld met een link waar ze extra uitleg kunnen vinden over het veilig gebruik van de voedingsdriehoek. Hierin zijn 4 verschillende opties beschikbaar, je hebt een optie ‘ochtend’ , ‘middag’ , ‘avonds’ en ‘dessert’ , zo kunnen ze makkelijk beschikbare recepten terugvinden. Ook gaan hier enkele tips instaan waar ze mee moeten oppassen.'
                }
              </span>
              <br/>
              <span>
                {
                  'Zo moet er bijvoorbeeld opgepast worden met de term ‘lightproducten’, deze heeft betrekking tot de hoeveelheid vetten en calorieën en niet op de hoeveelheid suikers. In lightproducten zitten nog steeds te veel suikers dan goed is. Zo betekent fruitsap ‘zonder toegevoegde suikers’ niet dat hier minder suiker inzit, deze bevat nog steeds veel andere soorten natuurlijke suikers die even schadelijk zijn (Ann van Vooren, diabeteseducator te Stuivenberg, 2017).'
                }
              </span>
            </CardText>
            <CardTitle title="Recepten" expandable={true}/>
            <CardText expandable={true}>
              <RaisedButton
                label={DialogTypes.Food.RECEPT1}
                onClick={() => this.handleOpen(DialogTypes.Food.RECEPT1,DialogTypes.Food.RECEPT1)}
                style={styles.buttonRecept}/>
              <RaisedButton 
                label={DialogTypes.Food.RECEPT2}
                onClick={() => this.handleOpen(DialogTypes.Food.RECEPT2,DialogTypes.Food.RECEPT2)}
                style={styles.buttonRecept}/>
              <RaisedButton 
                label={DialogTypes.Food.RECEPT3}
                onClick={() => this.handleOpen(DialogTypes.Food.RECEPT3,DialogTypes.Food.RECEPT3)}
                style={styles.buttonRecept}/>
            </CardText>
          </Card>
          <Card style={styles.cardStyle}>
            <CardHeader
              title="BewegingsAdvies" 
              subtitle="Tips & Oefeningen" 
              avatar={<MdDirectionsRun size={30}/>}
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardTitle title="Tips" expandable={true}/>
            <CardText expandable={true}>
              Als je elke dag 30 min beweegt, vermindert de kans op diabetes type 2 met 40% (International Diabetes Fonds, 2016).
              De aanbevelingen voor beweging van jongeren is minstens 60 minuten per dag matig tot intensief te bewegen en bijkomend 3 maal in de week specifieke activiteiten te beoefenen om de spieren en botten te versterken. Voor volwassenen zijn deze iets anders, zij zouden minstens 30 minuten per dag intensief moeten bewegen of 10.000 stappen per dag zetten m.b.v. bijvoorbeeld een stappenteller of minstens 3 keer 20 minuten intensief bewegen. Hier bijkomend zouden ze 2 maal per week een specifieke activiteit moeten beoefenen om de spieren en botten te kunnen versterken (Vigez, 2017).
            </CardText>
            <CardTitle title="Oefeningen" expandable={true}>
              <RaisedButton 
                label="Sit-ups"
                onClick={() => this.handleOpen('Sit-ups', DialogTypes.Movement.SIT_UPS)}
                style={styles.buttonExercise}/>
              <RaisedButton 
                label="Push-ups"
                onClick={() => this.handleOpen('Push-ups', DialogTypes.Movement.PUSH_UPS)}
                style={styles.buttonExercise}/>
              <RaisedButton 
                label="Squats"
                onClick={() => this.handleOpen('Squats', DialogTypes.Movement.SQUATS)}
                style={styles.buttonExercise}/>
            </CardTitle>
          </Card>
          <Card style={styles.cardStyle}>
            <CardHeader
              title="Instanties & Verenigingen" 
              subtitle="Links" 
              avatar={<MdLink size={30}/>}
              actAsExpander={true}
              showExpandableButton={true}
            />
            <CardText expandable={true}>
              <div style={styles.linkDivStyle}>
                <a style={styles.linkStyle} href="https://www.diabetes.be/" target="_blank"><MdLink style={{marginRight: 10}}/>{'Diabetes liga'}</a>
              </div>
              <div style={styles.linkDivStyle}>
                <a style={styles.linkStyle} href="https://www.diabetesfonds.nl/home" target="_blank"><MdLink style={{marginRight: 10}}/>{'Diabetes Fonds'}</a>
              </div>
              <div style={styles.linkDivStyle}>
                <a style={styles.linkStyle} href="http://www.diabetes-vdv.be/" target="_blank"><MdLink style={{marginRight: 10}}/>{'Vlaamse Diabetes Vereniging'}</a>
              </div>
            </CardText>
          </Card>
        </div>
      </Paper>
    );
  }
  _renderActions(){
    return [
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.handleClose}
      />,
    ]
  }
  _renderDialogContent(){
    switch(this.state.dialogType){
    case DialogTypes.Movement.SIT_UPS:
      return <DialogContentSitUps/>;
    case DialogTypes.Movement.PUSH_UPS:
      return <DialogContentPushUps/>;
    case DialogTypes.Movement.SQUATS:
      return <DialogContentSquat/>;
    case DialogTypes.Food.RECEPT1:
      return <DialogContentRecept1/>;
    case DialogTypes.Food.RECEPT2:
      return <DialogContentRecept2/>;
    case DialogTypes.Food.RECEPT3:
      return <DialogContentRecept3/>;
    case DialogTypes.Info.WHAT:
      return <DialogContentInfoWhat/>;
    case DialogTypes.Info.RECOGNIZE:
      return <DialogContentInfoRecognize/>;
    case DialogTypes.Info.CONSEQUENCES:
      return <DialogContentInfoConsequences/>;
    case DialogTypes.Info.RISCS:
      return <DialogContentInfoRiscs/>;
    case DialogTypes.Info.PREVENT:
     return <DialogContentInfoPrevent/>
    case DialogTypes.Info.STATS:
     return <DialogContentInfoStats/>
    default:
      return null;
    }
  }
  _renderDialog(){
    return (
      <Dialog
        contentStyle={styles.dialogStyle}
        title={this.state.dialogTitle}
        actions={this._renderActions()}
        modal={false}
        open={this.state.open}
        autoScrollBodyContent={true}
        onRequestClose={this.handleClose}>
        {this._renderDialogContent()}
      </Dialog>
    );
  }
  render(){
    return (
      <div>
        {this._renderDialog()}
        {this._renderPaper()}
      </div>
    );
  }
};

module.exports = MainComponent;