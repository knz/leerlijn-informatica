.. include:: common.d

|SNAV1| – Efficiënte codenavigatie (basis)
=============================================

.. contents:: Inhoud
   :local:

Waarom is dit belangrijk?
-------------------------

Soms moet je een bestaande project van iemands anders onderzoeken en
daarin de definitie van sommige onderdelen snel kunne vinden.

Je eigen programma's kunnen ook groter worden met tientallen
broncodebestanden. 

**Het zelf onthouden van waar alles zit is best lastig en
onpraktisch.**

Gelukkig zijn er al tools om je mee te helpen. De belangrijkste
operaties die je vaak zal gebruiken zijn:

- snel navigeren van het punt van gebruik van een struct, type,
  variabele of functie naar het punt waar het gedefinieerd is. Engels:
  ":def:`use to definition`". Dit is de belangrijkste operatie.

- snel navigereren vanaf de definitie van een variabele, struct, type
  of functie naar alle punten waar het gebruikt is. Engels:
  ":def:`definition to uses`" of ":def:`references`".

Navigereren met Eclipse
-----------------------

Voor Java programmeren zal je vaak Eclipse gebruiken. Hier is het heel
simpel:

- navigereren van gebruik naar definitie: :kbd:`F3` of rechtse
  muisknop dan "Open Declaration".

- navigereren van definitie naar gebruik: :kbd:`Shift+Ctrl+G` of
  rechtse muisknop dan "References > Workspace".

Navigereren in C projecten met Vim / Emacs en tags
---------------------------------------------------

.. note:: Deze methode geeft je alleen een richting: van gebruik naar definitie.
   Het voordeel is dat het bijna altijd beschikbaar is, zelfs als je een
   onbekende computer gebruikt waar je niet eigen tools mag installeren.

1. Voordat je kunt zoeken moet je een :def:`tag database` aanmaken om
   je broncode te inventariseren. Dit doe je met het programma
   :program:`ctags` (voor een Vim database) of :program:`etags` (voor
   een Emacs database). Je geeft aan het commando de lijst van alle broncode
   bestanden in je project:

   .. code-block:: shell
 
      $ cd /pad/naar/je/project

      $ ctags *.c *.h
      # of:
      $ etags *.c *.h

2. In je editor, kun je vervolgens een willekeurig bestand openen
   en dan je cursor positioneren op het woord dat je wil zoeken. Dan:

   - in Vim: :kbd:`Ctrl-]`  (dan :kbd:`Ctrl+T` om terug te gaan)
   - in Emacs: :kbd:`M-.` (:kbd:`Alt+.` of :kbd:`Esc .`)

Je moet vervolgens de database updaten (met :program:`ctags` of :program:`etags`) 
iedere keer dat je nieuwe definities toevoegd in je broncode. Dit kan je eventueel
automatiseren (zie |DAUTO1|_ en |DAUTO2|_).

.. tip::

   Als je het programma `exuberant ctags`__ gebruikt (standaard op
   Linux, extra softwarepakket op BSD), kunnen :program:`ctags` /
   :program:`etags` ook een database maken voor andere
   programmeertalen dan C: Python, JavaScript, enz.
 
   .. __: http://ctags.sourceforge.net/

Navigereren in C projecten met Vim / Emacs en cscope
----------------------------------------------------


Initialisatie
`````````````

1. Zorg ervoor dat het programma `cscope`__ beschikbaar is op je
   systeem (Ubuntu/Debian: :program:`apt-get install cscope
   cscope-el`; OSX/MacPorts: :program:`port install cscope`).

   .. __: http://cscope.sourceforge.net

2. Voordat je kunt zoeken moet je een :def:`cscope database` aanmaken om
   je broncode te inventariseren. Dit doe je met het programma
   :program:`cscope` (werkt met Vim en Emacs tegelijk):

   .. code-block:: shell
 
      $ cd /pad/naar/je/project

      $ cscope -Rb

Gebruik in Vim
``````````````

1. In je editor moet je eerst cscope activeren:

   - download het bestand
     http://cscope.sourceforge.net/cscope_maps.vim 

   - plaats dit bestand in de map :file:`~/.vim/plugin` (NB: "plugin"
     zonder s). Je kunt deze map aanmaken met |mkdir(1)|_ als het nog
     niet bestaat.

2. Om te zoeken:

   - van gebruik naar lokale definitie: :kbd:`gd` (:kbd:`g` dan :kbd:`d`)

   - van gebruik naar globale definitie: :kbd:`Ctrl+\\ g`
     (:kbd:`Ctrl+T` om terug te navigeren)

   - van definitie naar alle gebruiken: :kbd:`Ctrl+\\ c` (voor
     functies) en :kbd:`Ctrl+\\ t` (voor variabelen, types, enz) — dan
     :kbd:`Ctrl+T` om terug te navigeren.

Gebruik in Emacs
````````````````

1. Je moet eerst cscope activeren.

   - open het bestand :file:`~/.emacs.d/init.el` in een teksteditor
     (maak de map :file:`~/.emacs.d` aan als het nog niet bestaat),

   - voeg de volgende regel toe:

     .. code-block:: lisp

        (require 'xcscope)

2. Om te zoeken:

   - van gebruik naar lokale definitie: :kbd:`Ctrl+R` dan naam

   - van gebruik naar globale definitie: :kbd:`C-c s g`

   - van definitie naar alle gbruiken: :kbd:`C-c s c` (voor functies)
     en :kbd:`C-c s t`

Verder inlezen
--------------

- Jason Duell. `The Vim/Cscope tutorial`__. Accessed August 2015.

  .. __: http://cscope.sourceforge.net/cscope_vim_tutorial.html

- CEDET__ verander Emacs in een gevorderde programmeeromgeving.

  .. __: http://cedet.sourceforge.net/


