.. include:: common.d

|WTYP1| – Typografie (basis)
==============================

:Author: Raphael ‘kena’ Poss

.. contents::

":math:`\text{\LaTeX}`" ipv. "LaTeX"
------------------------------------

Het LaTeX logo druk je uit als "``\LaTeX``" (:math:`\text{\LaTeX}`)
binnen LaTeX documenten. Het is zijn kenmerk.

Hetzelfde gebeurt met ``\TeX`` (:math:`\text{\TeX}`).

Interpunctie en symbolen
------------------------

De volgende tabellen leer je voor twee redenen:

- om de Engelse namen te weten voor de belangrijkste interpunctie.
- om de LaTeX code voor ieder teken uit je hoofd te weten.

Interpunctie
````````````

.. index:: period (interpunctie)
.. index:: semicolon
.. index:: colon
.. index:: hyphen
.. index:: ellipsis
.. index:: dash

================= ================ ================== ====
Nederlands        Engels           LaTeX code         Resultaat
================= ================ ================== ====
komma             comma            ``,``              ,
punt              period, dot      ``.``              .
puntcomma         semicolon        ``;``              ;
dubbele punt      colon            ``:``              :
koppelteken       hyphen           ``-``              \-
aanhalingstekens  quotes,
                  quotation marks  zie onder          “ ” ‘ ’
accolade          curly brace      ``\{``             { }
                                   ``\}``
rond haakje       parenthesis      ``()``             ()
recht haakje      square bracket   ``[]``             []
shuine streep     slash            ``/``              /
backslash         backslash        ``\textbackslash`` \\
gedachtestreepje  en dash          zie onder          –
kastlijntje       em dash          zie onder          —
beletselteken     ellipsis         ``...``            …
================= ================ ================== ====

Symbolen
````````

.. index:: ampersand
.. index:: caret
.. index:: octothorpe
.. index:: underscore
.. index:: asterisk
.. index:: symbolen (LaTeX)
.. index:: pipe (interpunctie)

================= ================ ========== ====
Nederlands        Engels           LaTeX code Resultaat
================= ================ ========== ====
apenstaartje      at sign          ``@``      @
ampersand         ampersand        ``\&``     &
dakje             caret            ``\^``     ^
hekje             hash, pount,
                  octothorpe       ``#``      \#
sterretje         asterisk, star   ``*``      \*
laag streepje     underscore       ``\_``     _
verticaal streep  pipe, vertical
                  bar              ``|``      \|
tilde             tilde            ``\~``     ~
================= ================ ========== ====

Aanhalingstekens links en rechts
--------------------------------

LaTeX maakt het verschil tussen linkse en rechtse aanhalingstekens.
Bijvoorbeeld, als je dit schrijft in LaTeX:

.. code-block:: latex

   Jan zegt: "hallo"

Krijg je dit: **Jan zegt: ”hallo”**

Kijk naar het begin van ”hallo”. (Eventueel, vergroot de tekst om het
beter te kunnen zien). **Er staat daar een fout, je hebt de rechtse
aanhalingstekens links gebruikt!**

De goede manier:

.. code-block:: latex

   Jan zegt: ``hallo''

Krijg je dan dit: **Jan zegt: “hallo”**

Hetzelfde gebeurt met enkele aanhalingstekens:

.. code-block:: latex

   'hello' vs. `hello'

’hello’ vs. ‘hello’

Harde spaties
-------------

.. index:: harde spatie
.. index:: spatie (harde)
.. index:: non-breaking space

Wat zijn harde spaties?
```````````````````````

In de computerwereld is de harde spatie (Engels: *non-breaking space*) een speciaal karakter dat
gebruikt kan worden in plaats van een normale spatie om te voorkomen
dat een tekst aan het eind van een regel op de plaats van de spatie
automatisch wordt afgebroken.

In HTML is de code voor de harde spatie ``&nbsp;``

In LaTeX is het ``~`` (enkel tilde).

Wanneer gebruik je harde spaties?
`````````````````````````````````

- tussen een voorletter en een achternaam, om te zorgen dat de
  complete naam altijd in zijn geheel op één regel zal komen staan en
  niet na de voorletter al wordt afgebroken.

- tussen de duizendtallen bij grotere getallen, zodat als bijvoorbeeld
  "drieduizend" in cijfers geschreven wordt dit niet leidt tot een 3
  op de ene, en 000 op de volgende regel.

- in LaTeX citaten, tussen een woord en "``\cite{...}``", bijvoorbeeld
  "``This was done previously~\cite{otherwork}.``"

- tussen het woord "Figuur" of "Tabel" en het getal van de figuur of tabel,
  bijvoorbeeld: "``See also Figure~3.``"

- na afkortingen uit het latijn (i.e., e.g., cf.) bijvoorbeeld: "``use
  a verb here, e.g.~eat``"

Overhang in wiskundige formules
-------------------------------

.. index:: overhang (typografie)
.. index:: kerning

In gewone tekst zorgt LaTeX automatisch voor overhang (Engels:
*kerning*), het dichter bijeenschrijven van letters naargelang hun
vorm het toelaat. Een voorbeeld van overhang is tussen **f** en **i**,
dat geeft ":math:`\text{fi}`" (zie hoe de f en de i zijn samengevoegd,
de "i" heeft zijn punt verloren).

Helaas kan het mis gaan in wiskundige formules:

.. code-block:: latex

   $$ S\,finite \iff \exists n\in\mathbb{N} \quad \mid S\mid=n $$

.. math::

   S\,finite \iff \exists n\in\mathbb{N} \quad \mid S \mid =n

Kijk hoe lelijk "S is finite" is geworden! Dit corrigeer je door
middel van ``\text{...}`` of ``\mathit{...}`` (heb je eerder gezien
met |WMATH1|_):

.. code-block:: latex

   $$ S\,\mathit{finite} \iff \exists n\in\mathbb{N} \quad \mid S\mid=n $$

.. math::

   S\,\mathit{finite} \iff \exists n\in\mathbb{N} \quad \mid S \mid =n

Streepjes
---------

.. index:: streepjes
.. index:: gedachtestreepje
.. index:: kastlijntje

- een klein streepje (Engels: *hyphen*) gebruik je tussen
  woordgroepen, bijvoorbeeld "daddy-long-legs",

- een gedachtestreepje (Engels: *en dash*) is langer dan een klein
  streepje maar korter dan een kastlijntje. Je schrijft het in HTML
  met ``&ndash;``, in LaTeX met "``--``". Dit gebruik je:

  - in het Engels of het Nederlands, *met spaties eromheen*, ter
    afscheiding van een tussenzin of voor het aangeven van een
    onverwachte wending. Bijvoorbeeld: "Toen ze ten slotte ter plaatse
    kwamen, vonden ze het vertrek leeg – de vogel was gevlogen."

  - in het Engels, *zonder spaties eromheen*, om afstandsbereiken te
    markeren, bijvoorbeeld tussen jaren of bladzijden: "The French and
    Indian War (1754–1763) was fought in western Pennsylvania and
    along the present US–Canadian border (Edwards, pp. 81–101)."

- een kastlijntje (Engels: *em dash*) is langer dan een
  gedachtestreepje.  Je schrijft het in HTML met ``&mdash;``, in LaTeX
  met "``---``". Dit gebruik je:

  - in het Nederlands, *met spaties eromheen*, ter afscheiding van een
    tussenzin of voor het aangeven van een onverwachte
    wending. Bv. "Gij — niet op mijn verzoek — ontwoekerd aan de zee."

  - in het Engels, *zonder spaties eromheen*, ter afscheiding van een
    tussenzin of voor het aangeven van een onverwachte wending. Bv. "A
    flock of sparrows—some of them juveniles—alighted and sang."

  - in het Engels, om de bron van een citaat te
    vermelden. Bijvoorbeeld:

        "Seven social sins: politics without principles, wealth
        without work, pleasure without conscience, knowledge without
        character, commerce without morality, science without
        humanity, and worship without sacrifice."
        —Mahatma Gandhi

(Zelf)evaluatie
---------------

1. Hoe lees je het volgende uit in het Engels? "``fn=${first##*/};``"

   .. admonition:: Oplossing
      :class: toggle

      "f n equals dollar left brace f i r s t hash hash star slash right brace semicolon"

2. Hoe lees je het volgende uit in het Engels? "``/([\w\.]*)$/``"

   .. admonition:: Oplossing
      :class: toggle

      "slash left parenthesis left bracket backslash w backslash dot
      right bracket star right parenthesis dollar slash"

3. Vind de fouten in het volgende citaat: "Adams had also written a
   sketch for The Burkiss Way called ”42 Logical Positivism Avenue”,
   broadcast on BBC Radio 4 on 12 January 1977-14 months before
   the Hitchhiker's Guide first broadcast ‘42‘ in Fit the Fourth, 29
   March 1978."

   .. admonition:: Oplossing
      :class: toggle

      Verkeerd linkse aanhalingsteken: “42 Logical Positivism Avenue”

      Verkeerd rechtse aanhalingsteken: ‘42’

      Verkeerd streepje tussen 1977 en 14, het moet of "1977 – 14" zijn,
      of "1977—14" (afscheiding bijzin).

4. Corrigeer de volgende zin in LaTeX: ``There are less bytes in a
   kilobyte, i.e. 10^3 bytes, than in a kibyte, i.e. 2^10 bytes.``

   .. admonition:: Oplossing
      :class: toggle

      .. code-block:: LaTeX

         There are less bytes in a kilobyte, i.e.~$10^3$ bytes, than
         in a kibyte, i.e.~$2^{10}$ bytes.

Verder inlezen
--------------

- Wikipedia, `Dash`__

  .. __: https://en.wikipedia.org/wiki/Dash

- Wikipedia, `Gedachtestreepje`__

  .. __: https://nl.wikipedia.org/wiki/Gedachtestreepje

- Wikipedia, `Ligatuur (typografie)`__

  .. __: https://nl.wikipedia.org/wiki/Ligatuur_%28typografie%29

- William Strunk, Jr. `The Elements of Style`_, 1918.

  .. _`The Elements of Style`: http://www.internetsociety.org/sites/default/files/The%20elements%20%20of%20style%20(book).pdf
