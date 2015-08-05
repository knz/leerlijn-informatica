Inleiding en motivatie voor docenten
====================================

Vanuit de tutoren, de student-assistenten en zelfs de huidige
eerstejaars studenten komt regelmatig het geluid dat bepaalde
vaardigheden niet of onvoldoende behandeld worden binnen de
studie. Denk aan gebruik van Linux, git en LaTeX: geen directe
doelstellingen van vakken, maar wel essentieel binnen de studie en het
vakgebied. Er wordt kort aandacht aan besteed, bijvoorbeeld bij PAV,
maar daarna vindt er weinig of geen herhaling plaats en er wordt na
zekere tijd simpelweg aangenomen dat de studenten deze vaardigheden
beheersen.

Huidige situatie
----------------

Op dit moment is er voor gebruik van Linux het BYOD-practicum helemaal
aan het begin van het jaar, waarbij Linux geïnstalleerd wordt door een
aantal assistenten. Vervolgens wordt bij Inleiding Programmeren een
introductie gegeven aan de hand van bronnen van de University of
`Surrey`_ en werk van Raphael Poss (`Introductie Unix`_). Hoewel de bronnen samen een
prima introductie geven, gaat het veel studenten volledig voorbij
doordat ze teveel informatie in één keer krijgen en het niet kunnen
plaatsen door hun gebrek aan ervaring. Ook zijn er nog wel eens wat
(facultatieve) colleges of situaties waarin assistenten het voortouw
nemen om een onderwerp als makefiles of vim onder de aandacht te
brengen.

.. _Surrey: http://www.ee.surrey.ac.uk/Teaching/Unix/
.. _Introductie Unix: http://science.raphael.poss.name/intro-unix.html

Voor git is er een practicum bij PAV, waarna de studenten het moeten
gebruiken bij project webprogrammeren. Dat past uitstekend, maar
meerdere groepjes gaven aan het begin van het project aan git
eigenlijk nog niet te snappen. Dat is in de loop van het project wel
gegroeid, maar het heeft meer sturing nodig. Ook wordt geen aandacht
besteed aan geavanceerd gebruik van git (bijvoorbeeld branches en
merging).

LaTeX komt meerdere keren terug bij PAV. Er is een practicum in het
begin en vanaf dan worden schrijfopdrachten in LaTeX
gemaakt. Verschillende kleinere onderwerpen worden later aangestipt,
zoals het gebruik van formules en refereren. De ervaring leert dat
verslagen in het tweede jaar vrijwel altijd in LaTeX gemaakt
worden. Behalve de onderwerpen die nu al bij PAV aan bod komen, zou
meer aandacht voor gebruik van bijvoorbeeld figuren, formules en
beamer waardevol kunnen zijn.

De leerlijn
-----------

Doelstelling van de leerlijn informaticavaardigheden is het
structureren en verdiepen van het onderwijs in deze drie vaardigheden,
linux, LaTeX en git. Deze vaardigheden behoren niet direct tot het
programmeren, maar zijn wel essentieel binnen het vakgebied. De
leerlijn loopt door de eerste twee jaren van de bacheloropleiding
informatica en behandelt de vaardigheden wanneer ze optimaal
aansluiten bij de op dat moment behandelde vakinhoud.

Het nieuw te ontwikkelen materiaal dient te voldoen aan de volgende
randvoorwaarden:

- Het is gericht op de praktijk en bedoeld om te oefenen.
- Het dient zelfstandig door de student gemaakt te kunnen worden.
- Het dient relatief eenvoudig hergebruikt te kunnen worden bij
  veranderingen in het curriculum.

Vaardigheden
------------

Er worden drie vaardigheden centraal gezet, namelijk werken met Linux,
Git en LaTeX. Binnen deze vaardigheden worden voor de meeste
onderdelen (bijvoorbeeld maken van figuren in LaTeX) een basisopdracht
en een geavanceerde opdracht gemaakt. Door het in tweeën te delen,
blijft de werkdruk voor de student beter te behappen en wordt er voor
gezorgd dat een student minstens twee keer geoefend heeft met een
specifiek onderdeel waardoor het beter blijft hangen. Ook is hierbij
belangrijk dat de vaardigheden relevant zijn voor het vak en dat ze
daarbij ook terugkomen.

Linux
~~~~~

Bij Linux is het vooral het algemene gebruik waar in het begin
aandacht aan besteed moet worden, zoals het werken in een
terminal. Veel dingen kunnen in Linux ook grafisch, dus het
overschakelen naar de terminal kan geleidelijk aan worden gedaan. Een
leidraad kan gevonden worden in de tutorials van `Surrey`_
en de `Introductie Unix`_ van Raphael Poss. Ook bestaan er certificeringen die
concreter maken wat van bepaalde niveaus verwacht wordt bij `lpi.org`__.

.. __: https://www.lpi.org/study-resources/lpic-1-101-exam-objectives/#103 

Behalve het algemene gebruik van een terminal, waar al heel veel
commands onder vallen, zijn het gebruik van een terminal-editor en
debuggen nog twee belangrijke onderwerpen. Onder de eerste wordt
bijvoorbeeld gebruik van vim verstaan, wat toestaat om bijvoorbeeld
via ssh te programmeren. Dat is met een grafische editor (zoals gedit)
lastiger. Voor het leren van vim zijn er ook allerlei tutorials, zoals
op http://www.openvim.com/ of om te oefenen met de movement-toetsen de
`vim adventures`__. Veel aandacht hoeft er echter niet
aan vim besteed worden, het is geen essentiële vaardigheid.

.. __: http://vim-adventures.com/

Debuggen zou uitleg over gdb en valgrind inhouden. Ook hier is het
belangrijk dat deze gelinkt worden aan een relevant vak, zodat de
nieuwe kennis onmiddellijk in de praktijk kan worden gebracht. Al met
al is het leren werken met linux een vaardigheid die over de eerste
twee jaar van de bachelor steeds een beetje verbeterd kan worden.

Git
~~~

Het huidige git-practicum bij PAV is goed, al gaat het niet verder dan
een file.txt in een enkele repository. Bij webdb is het echter zo dat
er een hele code base in git komt, dus meer is nodig. In principe
leent webdb zich wel uitstekend voor het leren van git. Na het project
is dan nog een vervolg nodig, bijvoorbeeld bij besturingssystemen.

Eerder beginnen aan git is niet logisch omdat een gedeelte van de
studenten dan nog niet goed genoeg kan programmeren en het gebruik van
git ze dan nog weinig zegt. Later kan nog aandacht besteed worden aan
geavanceerder gebruik als branches en merging, hoewel het valt aan te
raden om dat ook al in het eerste jaar te behandelen.

Er zijn online uitstekende tutorials, zoals die van github zelf
`github git tutorial`_ en Atlassian_. Om te oefenen is er
ook van alles, zoals de `git game`_.

.. _github git tutorial: https://try.github.io/levels/1/challenges/1
.. _Atlassian: https://www.atlassian.com/git/tutorials/ 
.. _git game: https://github.com/git-game/git-game

LaTeX
~~~~~

LaTeX krijgt binnen PAV al vrij veel aandacht, wat ertoe leidt dat het
door de studenten goed gebruikt wordt. De huidige inhoud van PAV over
LaTeX kan geïntegreerd worden met deze leerlijn, waarbij meer tijd
genomen kan worden voor (correct) gebruik van figuren en tabellen,
refereren, formules en eventueel LaTeX beamer.

Basis-LaTeX hoort al bij het begin van de studie. Simpele figuren
kunnen dan ook behandeld worden, complexere figuren komen later bij
vakken waarbij dat relevant is (tweede jaar), dan krijgen de verslagen
wat meer vorm. Dat geldt ook voor formules, die passen ook goed bij
specifieke vakken.

In het curriculum
-----------------

De leerlijn zal bestaan uit zelfstandig werk met terugblikken tijdens
PAV of tijdens de relevante vakken. LaTeX en git zullen beide minder
tijd vergen dan linux, twee keer een uur of vier oefenen en daarna
blijvend gebruik zou genoeg moeten zijn.

In de hoorcolleges, in de computerpractica en binnen het practicum
academische vaardigheden kan op verschillende manieren bij deze
vaardigheden stilgestaan worden. In alle gevallen moet duidelijk zijn
wat de student precies moet doen, waarom deze dat moet kunnen en voor
wanneer deze met de vaardigheid geoefend dient te hebben.

Hoorcolleges
~~~~~~~~~~~~

Een uitstekende manier om te leren is het over de schouders van
experts meekijken. Waar mogelijk is dan ook de vraag aan docenten om
tijdens de hoorcolleges kort te demonstreren hoe zij zelf deze
vaardigheden toepassen. Deze demonstratie geeft de studenten een doel
(dit kan ik ermee) en kan inspirerend werken (dat wil ik ook kunnen).

Computerpractica
~~~~~~~~~~~~~~~~

Studenten kunnen met vragen over deze vaardigheden bij de assistenten
in de bestaande computerpractica terecht. Eventueel kan besloten
worden om hier één specifiek practicum voor aan te wijzen,
bijvoorbeeld een practicum dat relatief rustig is omdat het ver van de
deadlines vandaan ligt.

PAV
~~~

Hoewel een student zelfstandig de opdrachten maakt, wordt er op de
juiste momenten in de bijeenkomsten van PAV bij stilgestaan hoe het
ging. De tutor kan dan ook de eigen ervaringen delen. Dit expliciete
bespreekmoment functioneert direct als deadline voor de studenten en
motiveert ze om daadwerkelijk tijdig en zelfstandig de opdrachten te
maken.  Ook kan het maken van de oefeningen onderdeel worden gemaakt
van de afrekening rondom PAV: als een student het niet doet, kan deze
een gekoppeld vak niet meer halen.

Ontwikkeling
------------

Voorstel om gedurende het collegejaar 2015-2016 de huidige opdrachten
waar nodig aan te passen en nieuwe opdrachten te laten ontwikkelen
door twee studentassistenten. De samenstelling kan wisselen
afhankelijk van expertise. Er wordt gekozen voor twee zodat ze
onderling kunnen overleggen. Daarnaast kan de coördinator academische
vaardigheden geraadpleegd worden en helpen in de afstemming met de
docenten.

Hoewel online allerlei goed materiaal te vinden is, is dat aan
verandering onderhevig en dus niet goed voor de continuïteit. Daarom
wordt hieruit inspiratie gehaald maar uiteindelijk zelf een pakket
samengesteld dat in vorm een geheel vormt. Hierdoor kan het ook
functioneren als visitekaartje van de opleiding in plaats van de
indruk te wekken dat we vooral leunen op materiaal van andere
universiteiten.

Eigenaarschap
-------------

Een leerlijn zonder eigenaar sterft een snelle dood. Het voorstel is
om in eerste instantie de coördinator academische vaardigheden
eigenaar te maken. Gezien de inhoud van de leerlijn is het mogelijk
logischer om op termijn een docent die nauw betrokken is bij het
programmeeronderwijs in de opleiding verantwoordelijk te maken.

Kosten
------

Hierin kan onderscheid gemaakt worden in de kosten voor de
ontwikkeling, onderhoud en uitvoering.

Ontwikkeling
~~~~~~~~~~~~

De meeste kosten zitten in de ontwikkeling van nieuw
materiaal. Verwacht wordt dat voor het ontwikkelen van een opdracht
van 4 uur voor de studenten minimaal 12 uur ontwikkeltijd nodig is,
waardoor al snel meer dan 100 uur nodig is om een programma op te
zetten.

Onderhoud
~~~~~~~~~

Door verandering in het curriculum maar ook door ontwikkelingen in het
veld zal het nodig zijn om aanpassingen te maken. Ervan uitgaand dat
kleine aanpassingen voldoende zijn, zou dit kunnen in de bestaande
uren door verschillende assistenten en tutoren te vragen één
specifieke opdracht te herzien.

Voor grondig onderhoud - bijvoorbeeld na het eerste jaar en na grote
curriculumwijzigingen - zullen extra uren beschikbaar gesteld moeten
worden.

Uitvoering
~~~~~~~~~~

Uitgangspunt is dat de studenten de opdrachten zelfstandig dienen te
maken. In dat aspect is het programma dus uitermate goedkoop.

Als er in bestaande computerpractica en bijeenkomsten van PAV tijd is
om bij de opdrachten stil te staan of vragen te beantwoorden, zijn er
geen tot weinig extra kosten.  Wanneer extra practica ter
ondersteuning gegeven worden of uitvoerig (i.e. meer dan 5 à 10
minuten) bij de opdrachten stilgestaan gaat worden binnen de
PAV-bijeenkomsten, nemen de kosten voor de uitvoering toe. Naast een
(beperkt) aantal extra uren assistentie betekent dit mogelijk ook dat
onderwijszalen langer gebruikt worden, met de bijbehorende kosten.
