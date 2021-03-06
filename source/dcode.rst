.. include:: common.d

|DCODE| – Computergetallenstelsels
==================================

:Auteur: Raphael ‘kena’ Poss

.. contents:: Inhoud
   :local:

Algemene begrippen
------------------

.. index:: talstelsel
.. index:: getallenstelsel
.. index:: numeral system

Een talstelsel, getallenstelsel of getallensysteem is een wiskundig
systeem om getallen voor te stellen [#]_. Ze heten ook :def:`numeral
system` in het Engels.

.. [#] https://nl.wikipedia.org/wiki/Talstelsel

We maken in de informatica heel vaak een verschil tussen de *waarde*
van een getal en zijn *representatie*.

Bijvoorbeeld, de hoeveelheid appels in "twintig appels" kunnen we
*weergeven* als "20", "14", "10100", "24", afhankelijk van het
talstelsel.

.. index:: positiestelsel
.. index:: positional notation

Een :def:`positiestelsel` (:def:`positional notation` in het Engels) is een
talstelsel waar de representatie van getallen opgebouwd wordt door de
cijfers te lezen of schrijven in een vaste richting. Dit is het meest
gangbare soort talstelsel. Dit onderscheid bestaat omdat bijvoorbeeld romeinse
getallen geen positiestelsel vormen.

In het dagelijks leven ben je al gewend aan 3 positiestelsels: 10, 12
(voor uren) en 60 (voor seconden en minuten). Je weet bijvoorbeeld al
dat de hoeveelheden seconden in "48 seconden + 30 seconden"
vaker weergegeven wordt als "1:18" dan "78".

In de informatica zijn 3 extra positiestelsels belangrijk: 2 (binair), 8
(octaal) en 16 (hexadecimaal). Daarmee zijn hoeveelheden in
programma's en verschillende tools uitgedrukt.

Onderliggende wiskunde
----------------------

.. index:: grondtal
.. index:: radix
.. index:: base (number)
.. index:: binair
.. index:: octaal
.. index:: hexadecimaal

Een positioneel talstelsel met grondtal *b* (:math:`b > 1`, Engels: :def:`radix` of :def:`base`)
wordt gebaseerd op *b* verschillende symbolen, of :def:`cijfers`.

================== ====================
Grondtal           Cijfers
================== ====================
2 (binair)         0, 1
8 (octaal)         0, 1, 2, 3, 4, 5, 6, 7
10 (decimaal)      0, 1, 2, 3, 4, 5, 6, 7, 8, 9
16 (hexadecimaal)  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d, e, f
================== ====================

Van representatie naar waarde
`````````````````````````````

Met grondtal *b* wordt de waarde van een rij cijfers bepaald als volgt:

- de *b* cijfers zelf krijgen een vaste waarde tussen 0 en *b*-1.
- de waarde van een rij cijfers met de vorm :math:`c_k...c_3c_2c_1c_0` is dan bepaald met de formule:

  .. math::

     w = \sum_{i=0}^k c_ib^i

In de volgende voorbeelden zijn de *waardes* geschreven als
:math:`n_{10}` (representatie met grondtal 10), we
schrijven bijvoorbeeld de waarde van "honderddrieentwintig" als :math:`123_{10}`.

Bijvoorbeeld, met :math:`b = 10_{10}`, heeft het getal geschreven als "456"
:math:`c_2 = 4_{10}, c_1 = 5_{10}, c_0 = 6_{10}` en zijn waarde is dus:

.. math::

   \begin{array}{rl}
   w & = c_2 \cdot (10_{10})^2 + c_1 \cdot (10_{10})^1 + c_0 \cdot (10_{10})^0 \\
     & = 4_{10} \cdot 100_{10} + 5_{10} \cdot 10_{10} + 6_{10} \cdot 1_{10} \\
     & = 456_{10}
   \end{array}

Dezelfde representatie "456", geïnterpreteerd met grondtal :math:`8_{10}`, heeft dan als waarde:

.. math::

   \begin{array}{rl}
   w & = c_2 \cdot (8_{10})^2 + c_1 \cdot (8_{10})^1 + c_0 \cdot (8_{10})^0 \\
     & = 4_{10} \cdot 64_{10} + 5_{10} \cdot 8_{10} + 6_{10} \cdot 1_{10} \\
     & = 302_{10}
   \end{array}

Hetzelfde weer met grondtal :math:`16_{10}`, wordt de waarde:

.. math::

   \begin{array}{rl}
   w & = c_2 \cdot (16_{10})^2 + c_1 \cdot (16_{10})^1 + c_0 \cdot (16_{10})^0 \\
     & = 4_{10} \cdot 256_{10} + 5_{10} \cdot 16_{10} + 6_{10} \cdot 1_{10} \\
     & = 1110_{10}
   \end{array}

En met grondtal :math:`2_{10}`:

.. admonition:: Antwoord
   :class: toggle

   Het getal "456" is geen geldige representatie in grondtal 2, omdat
   dit positiestelsel maar 2 cijfers (0 en 1) heeft!

Van waarde naar representatie
`````````````````````````````

De representatie van een waarde *w*  wordt berekend met de volgende formule:

.. math::

   c_k = \frac{w}{b^k} - (b\lfloor\frac{w}{b^{k+1}}\rfloor) = \lfloor\frac{w}{b^k}\rfloor \bmod b

De representatie stopt op cijferpositie *k* wanneer :math:`b^{k+1}` groter wordt dan *w*.

Bijvoorbeeld, voor de waarde :math:`w = 123_{10}` en met grondtal :math:`b = 2_{10}`:

.. math::

   \begin{array}{l}
   c_0 = 123_{10} \bmod 2 = 1 \\
   c_1 = \frac{123_{10}}{2_{10}} \bmod 2 = \lfloor 61.5_{10} \rfloor \bmod 2 = 61_{10} \bmod 2 = 1 \\
   c_2 = \frac{123_{10}}{4_{10}} \bmod 2 = 30_{10} \bmod 2 = 0 \\
   c_3 = \frac{123_{10}}{8_{10}} \bmod 2 = 15_{10} \bmod 2 = 1 \\
   c_4 = \frac{123_{10}}{16_{10}} \bmod 2 = 7_{10} \bmod 2 = 1 \\
   c_5 = \frac{123_{10}}{32_{10}} \bmod 2 = 3_{10} \bmod 2 = 1 \\
   c_6 = \frac{123_{10}}{64_{10}} \bmod 2 = 1_{10} \bmod 2 = 1  \qquad \text{(representatie stopt hier: } 2^7 > 123_{10}\text{)} \\
   \end{array}

De representatie van :math:`123_{10}` met grondtal 2 is dus :math:`1111011_2`.

Notaties in de informatica
--------------------------

De programmeertal C (en zijn opvolgers als Java, JavaScript en
veel anderen) heeft de volgende notaties standaard gemaakt:

- voor grondtal 2 (binaire) representaties:  "0b" en dan de representatie, bijvoorbeeld "0b1111011"

- voor grondtal 16 (hexadecimaal):  "0x" en dan de representatie, bijvoorbeeld "0x7b"

- voor grondtal 8 (octaal): "0" en dan de representatie, bijvoorbeeld "0173".

  .. warning::

     Pas op! In de wiskunde heeft een extra nul cijfer voor een getal geen
     bijzondere betekenis, en het getal blijft vaak geinterpreteerd
     met grondtal 10. In de informatica, vooral programmacode, betekent
     een "0" aan het begin heel vaak dat de representatie octaal is.

Conversie tussen grondtallen 2 en 16
------------------------------------

Voor twee willekeurige grondtallen *a* en *b* bestaat er geen makkelijke
algemene formule om een representatie met grondtal *a* te vertalen naar
een representatie met grondtal *b*.

Maar voor het bijzonder geval van getallen 2 en 16, is het juist heel
makkelijk: **ieder cijfer in grondtal 16 kan direct gemapt worden naar
een groep van 4 cijfers met grondtal 2**.

=========== ===========
Grondtal 16 Grondtal 2
=========== ===========
0           0000
1           0001
2           0010
3           0011
4           0100
5           0101
6           0110
7           0111
8           1000
9           1001
a           1010
b           1011
c           1100
d           1101
e           1110
f           1111
123         000100100011 (0001 0010 0011, zie boven)
456         010001010110 (0100 0101 0110, zie boven)
beef        1011111011101111 (1011 1110 1110 1111)
dead        1101111010101101 (1101 1110 1010 1101)
=========== ===========


.. note:: Deze conversiemethode kan altijd worden toegepast
   tussen grondtallen *a* en *b* zodra :math:`a = b^k`, waar dan
   1 cijfer in grondtal *a* gemapt is naar *k* cijfers in grondtal *b*.
   Hier hebben we :math:`b = 2` en :math:`a = 16 = b^4`.

Handige waardes
---------------

.. index:: bit (definitie)
.. index:: byte (definitie)
.. index:: nibble (definitie)

Iedere informaticus wordt productiever en sneller in zijn werk door de
volgende tabellen uit zijn hoofd te leren:

- de tabel van de 16 hexadecimale cijfers naar hun binaire representatie (zie boven)
- de volgende 2-machten:

  ============== ===================== ================= ===============
  Macht          Decimaal              Binair            Hexadecimaal
  ============== ===================== ================= ===============
  :math:`2^0`    1                     0b1               1
  :math:`2^1`    2                     0b10              2
  :math:`2^2`    4                     0b100             4
  :math:`2^3`    8                     0b1000            8
  :math:`2^4`    16                    0b10000           0x10
  :math:`2^5`    32                    0b100000          0x20
  :math:`2^6`    64                    0b1000000         0x40
  :math:`2^7`    128                   0b10000000        0x80
  :math:`2^8`    256                   0b100000000       0x100
  :math:`2^9`    512                   0b1000000000      0x200
  :math:`2^{10}` 1024                  0b10000000000     0x400
  :math:`2^{16}` 65536                 0b100000000000000 0x10000
  :math:`2^{20}` ongeveer 1 miljoen                      0x100000
  :math:`2^{24}` ongeveer 16 miljoen                     0x1000000
  :math:`2^{32}` ongeveer 4 miljard                      0x100000000
  ============== ===================== ================= ===============

- een :def:`bit` is een cijfer met grondtal 2 (0 of 1).
- een :def:`byte` is een groep van 8 bits.
- een :def:`nibble` is een groep van 4 bits. Ieder hexadecimaal cijfer
  is gecodeerd met precies 1 nibble.

Conversies in de programmeertaal C
----------------------------------

- conversie van representatie naar waarde:

  - in grondtal 10: |atoi(3)|_, |atol(3)|_

  - in grondtal *n* met :math:`2 \leq n \leq 36`: |strtol(3)|_,
    |strtoul(3)|_, |strtoimax(3)|_, |strtoumax(3)|_.

- conversie van waarde naar representatie in grondtal 8 of 16:
  |printf(3)|_, |snprintf(3)|_:

  .. code-block:: c

     printf("%x\n", 123);  // produceert 7b
     printf("%#x\n", 123); // produceerd 0x7b
     printf("%o\n", 123);  // produceert 173
     printf("%#o\n", 123); // produceert 0173

Negatieve getallen en 2-complement
----------------------------------

Met *N* bits weet je al dat je een waarde tussen 0 en :math:`2^N-1` kunt
coderen, van 000...0 tot/met 111...111. Hoe kan je dan met *N* bits ook
negatieve getallen coderen?

Naive codering en wenselijke eigenschappen
``````````````````````````````````````````

Een mogelijke eenvoudige manier is om een bit te gebruiken als teken en dan
:math:`N-1` bits als waarde. Bijvoorbeeld met 3 bits:

========== =========
Codering   Waarde
========== =========
000        0
001        1
010        2
011        3
100        :math:`-0`
101        :math:`-1`
110        :math:`-2`
111        :math:`-3`
========== =========

Echter wordt deze manier amper gebruikt, omdat het de volgende
wenselijke eigenschappen breekt:

1. 1 opgeteld met de codering van een negatief getal moet ook 1
   optellen bij zijn waarde. In de codering hierboven werkt dit niet,
   want ":math:`110+1`" (:math:`-2+1`) geeft 111 (:math:`-3`), niet
   101 (:math:`-1`).

2. aftrekken van een positief getal moet de goede negatieve waarde
   bereiken.  Hier werkt dit ook niet, want ":math:`010-011`"
   (:math:`2-3`) geeft 100 (:math:`-0`), niet 101 (:math:`-1`).

2-complement definitie
``````````````````````

.. index:: two's complement
.. index:: 2-complement

In plaats daarvan wordt de :def:`2-complement` notatie gebruikt (Engels:
:def:`two's complement`). Dit werkt als volgt voor *N* bits:

- 1 bit wordt gebruikt als teken;
- voor een getal :math:`x\geq 0`, is de tekenbit 0, dan coderen de andere :math:`N-1` bits gewoon
  het getal;
- voor een getal :math:`x<0`, is de tekenbit 1, dan coderen de andere
  :math:`N-1` bits de waarde van :math:`2^{N-1}+x`.

Bijvoorbeeld met 4 bits (:math:`2^{N-1}=8`):

========== ========= =======================
Waarde     Tekenbit  Overige bits
========== ========= =======================
7          0         111
6          0         110
5          0         101
4          0         100
3          0         011
2          0         010
1          0         001
0          0         000
:math:`-1` 1         111  :math:`=8+(-1)=7`
:math:`-2` 1         110  :math:`=8+(-2)=6`
:math:`-3` 1         101  :math:`=8+(-3)=5`
:math:`-4` 1         100  :math:`=8+(-4)=4`
:math:`-5` 1         011  :math:`=8+(-5)=3`
:math:`-6` 1         010  :math:`=8+(-6)=2`
:math:`-7` 1         001  :math:`=8+(-7)=1`
:math:`-8` 1         000  :math:`=8+(-8)=0`
========== ========= =======================

Dit voldoet aan de eigenschappen: 1011+0010 (:math:`-5+2`) is 1101
(:math:`-3`); en 0001-0011 (:math:`1-3`) is 1110 (:math:`-2`).

Overloop met grote getallen
```````````````````````````

.. index:: overloop (getallen)
.. index:: overflow (arithmetic)

Als je alle bits van de codering groepeert en sorteert, krijg je dan
de volgende tabel:

========== =========
Codering   Waarde
0000       0
0001       1
0010       2
0011       3
0100       4
0101       5
0110       6
0111       7
1000       :math:`-8`
1001       :math:`-7`
1010       :math:`-6`
1011       :math:`-5`
1100       :math:`-4`
1101       :math:`-3`
1110       :math:`-2`
1111       :math:`-1`
========== =========

Dit geeft aan wat gebeurt als je een te groot getal optelt bij een
positief getal: het resultaat wordt negatief! Dit heet :def:`overloop`
(Engels: :def:`overflow`). Je kunt dit testen bijvoorbeeld in C:

.. literalinclude:: overflow.c
   :language: c

.. note:: Dit programma werkt niet op alle computers. Sommige computers
   geven een foutmelding aan wanneer overloop gebeurt. Andere
   computers gebruiken ook andere coderingen voor negatieve getallen,
   waardoor het resultaat anders uit komt. Echter laat dit voorbeeld
   overloop wel zien op de meeste computers.

Codering aangeven
`````````````````

Als je data krijgt van *N* bits waar de eerste bit 1 is, hoe weet je
of het een negatief getal is, of simpel een zeer groot positief getal?

**Beide interpretaties zijn mogelijk.** Je kunt dit niet zelf bepalen
door alleen naar de data te kijken. Om het verschil te kunnen maken,
moet je *uit de context* halen welke codering werd gebruikt.

Voorbeelden:

- "...the data is written as *unsigned* values..." (geen tekenbit,
  allen positieve getallen worden geencodeerd)

- "...the data is written as *signed values using two's complement*..." (negatieve
  getallen mogelijk)

- in programma's, door de *datatype* van variabelen. Bijvoorbeeld
  :code:`int` (:code:`signed int`) vs. :code:`unsigned`
  (:code:`unsigned int`) in C, C++ of Java.

(Zelf)evaluatie
---------------

1. Wat is de decimale representatie van 0b1101?

   .. admonition:: Oplossing
      :class: toggle

      13  (:math:`1\cdot 2^0 + 0\cdot 2^1 + 1\cdot 2^2 + 1\cdot 2^3 = 1 + 4 + 8`)

2. Wat is de grootste waarde, 0b101001 of 0x17?

   .. admonition:: Oplossing
      :class: toggle

      0b101001, want 0b101001 (0010 1001) = 0x29

3. In C, wat is het resultaat van de vergelijking ``0x24 > 32``?

   .. admonition:: Oplossing
      :class: toggle

      1 (waar), want 0x24 = :math:`2\cdot 16 + 4` en :math:`32 = 2\cdot 16`

4. Een rood-groen-blauw (RGB) pixel wordt gecodeerd door 3 waardes tussen 0 en 65535. Hoeveel
   bits zijn minimaal nodig om een pixel te coderen?

   .. admonition:: Oplossing
      :class: toggle

      48 (of 6 bytes), want 65535 = :math:`2^{16}-1` en dit heeft 16
      bits (2 bytes) nodig voor zijn representatie.

5. Schrijf voor jezelf een programma dat als invoerparameters een
   positief decimaal getal *N* en een nieuw grondtal *b* accepteert
   (:math:`2 \leq b \leq 36`), en die de representatie van *N* met
   grondgetal *b* uitvoert. Je oplossing moet goed werken voor de
   waardes 4294967295 (op een 32-bit computer) en 18446744073709551615
   (op een 64-bit computer).

   .. admonition:: Oplossing
      :class: toggle

      In Python:

      .. literalinclude:: convgetal.py
         :language: python

      In C:

      .. literalinclude:: convgetal.c
         :language: c
