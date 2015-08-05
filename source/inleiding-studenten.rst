Inleiding voor studenten
========================

.. role:: stitle
.. role:: utitle
.. role:: dtitle
.. role:: ttitle
.. role:: wtitle

.. raw:: html

   <script>
     $(document).ready(function() {
       $('.utitle').parent().addClass('utitle-parent');
       $('.dtitle').parent().addClass('dtitle-parent');
       $('.ttitle').parent().addClass('ttitle-parent');
       $('.wtitle').parent().addClass('wtitle-parent');
       $('.stitle').parent().addClass('stitle-parent');
     });
   </script>
   <style>
      .stitle-parent {background-color:#ccccff;}
      .wtitle-parent {background-color:#8888ff;}
      .ttitle-parent {background-color:#ff8000;}
      .utitle-parent {background-color:#ff6666;}
      .dtitle-parent {background-color:#4c9900;}
   </style>

Overzicht van alle vaardigheden
-------------------------------

De leerlijn vaardigheden is gesplitst in 5 banen:

**S** ("Source") 
   Omgaan met broncode 

**U** ("Unix")
   Omgaan met de Unix commando en procesomgeving

**D** ("Data")
   Omgaan met data, produceren en verwerken

**T** ("Tools")
   Omgaan met programmeerapparatuur

**W** ("Wetenschap")
   Wetenschappelijk communiceren

Op elke baan heeft ieder vaardigheden een kenmerk die met de letter
van zijn baan begint.

Alle vaardigheden behoren bij het gewenste profiel van een
gediplomeerde student Informatica, behalve de vaardigheden met een "+"
in de kenmerk, die alleen behoren bij studenten die verder willen
studeren in de Informatica (MSc CS of dergelijk).

.. list-table:: Overzicht vaardigheden
   :widths: 8 30 60
   :header-rows: 1

   * - Kenmerk
     - Titel
     - Samenvatting

   * - :stitle:`SGIT1`
     - Git gebruiken (basis)
     - Init, status, add, commit, push, pull, gitlab, mergeconflicten
 
   * - :stitle:`SGIT2`
     - Git gebruiken (adv)
     - Git game, branches, issues, merge requests, git blame
 
   * - :stitle:`SDOC1`
     - Gebruikersdocumentatie produceren (basis)
     - Goed README-bestand opstellen voor eigen code

   * - :stitle:`SDOC2+`
     - Gebruikersdocumentatie produceren (adv)
     - Eigen ``--help`` tekst opstellen en ``help2man`` gebruiken

   * - :stitle:`SNAV1`
     - Efficiënte codenavigatie (basis)
     - Snel van gebruik van struct/functie naar definitie kunnen navigeren
       binnen een broncodebestand

   * - :stitle:`SNAV2`
     - Efficiënte codenavigatie (adv)
     - Alle uses van struct of klas vinden in project; snel functies
       methodes of klassen hernoemen door een heel project

   * - :wtitle:`WBIB1`
     - Refereren (basis)
     - Gebruik van BibTeX met template
     
   * - :wtitle:`WBIB2`
     - Refereren (adv)
     - Omgaan met referentiemanagementsoftware (RefWorks, Medeley of dergelijk)

   * - :wtitle:`WPRE1`
     - Beamer (basis)
     - Simpele presentaties maken met template

   * - :wtitle:`WPRE2`
     - Beamer (adv)
     - Maken van een wetenschappelijke poster

   * - :wtitle:`WFIG1`
     - Figuren (basis)
     - Maken van simpele diagrammen, gebruik van dot, blockdiag, seqdiag

   * - :wtitle:`WFIG2+`
     - Figuren (adv)
     - Complexere figureren, gebruik van PGF, TikZ

   * - :wtitle:`WMATH1`
     - Formules (basis)
     - Weergeven relatief simpele formules of eigen formules

   * - :wtitle:`WMATH2`
     - Formules (adv)
     - Overnemen van complexe formules uit bestaande boeken/artikelen

   * - :wtitle:`WTYP1`
     - Typografie (basis)
     - Goed gebruik van “ ” ‘ ’ ‐ – —, kerning, spaties en verbindingstekens

   * - :ttitle:`TDBG1`
     - Debuggen (basis)
     - Print statements, breakpoints, backtraces, valgrind

   * - :ttitle:`TDBG2+`
     - Debuggen (adv)
     - Watchpoints, data traces, multi-thread backtraces, cgdb

   * - :ttitle:`TPROF1+`
     - Gedrag profileren (basis)
     - strace, gprof

   * - :ttitle:`TPROF2`
     - Gedrag profileren (adv)
     - cachegrind, vtune

   * - :utitle:`UBASE`
     - Unix concepten
     - Programma vs. proces; redirecties; pipes; jobbeheer; man; sudo; kill

   * - :utitle:`UCMD`
     - Basiscommando's
     - Navigatie filesysteem (ls, mkdir, cd, pwd, cp, mv, find, du, rm), bestanden
       inspecteren (file, cat, less, head, tail, grep
       met simpele strings, wc, cut)
     
   * - :utitle:`UFS`
     - Opslagbeheer
     - Aanmaken en wissen van eigen filesystemen vanaf de commandolijn

   * - :utitle:`USRV1`
     - Op afstand werken (basis)
     - SSH sleutelauthenticatie, gebruik van tmux of screen

   * - :utitle:`USRV2`
     - Op afstand werken (adv)
     - Tunnel of SOCKS proxy aanmaken en gebruiken met SSH

   * - :utitle:`URE1`
     - Reguliere expressies (basis)
     - Complexe zoekopdrachten uitvoeren met grep en python.re

   * - :utitle:`URE2+`
     - Reguliere expressies (adv)
     - Simpele automatische 
       tekstverwerkingen uitvoeren met sed, awk, perl of python.re

   * - :dtitle:`DCODE`
     - Computergetallenstelsels
     - Snel verhoudingen en vergelijkingen schatten tussen binaire
       en hexadecimale getallen, 2-machten herkennen

   * - :dtitle:`DPLOT1`
     - Automatisch plotten (basis)
     - Scatter, bar en lijn plots automatisch produceren door middel
       van simpele templates met gnuplot of matplotlib

   * - :dtitle:`DPLOT2`
     - Automatisch plotten (adv)
     - Tweede Y-as gebruiken, logaritmische schaal toepassen, meedere
       plots bij elkaar genereren

   * - :dtitle:`DAUTO1`
     - Workflows automatiseren (basis)
     - Gebruik van Makefiles met vaste templates/voorbeelden
 
   * - :dtitle:`DAUTO2`
     - Workflows automatiseren (adv)
     - Simpele scripts zelf maken om een programma meermalig aan te roepen
       met verschillende parameters, eigen Makefiles schrijven

   * - :dtitle:`DAUTO3+`
     - Workflows automatiseren (adv+)
     - Gebruik van distcc en batchingcommando's om programma's uit te voeren
       op een rekencluster
 
   * - :dtitle:`DSTREAM+`
     - Omgaan met datastromen
     - Continu 1D gegevens dynamisch plotten, lopende gemiddelde, min, max,
       std afwijking berekenen

 
