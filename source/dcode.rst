.. include:: common.d

|DCODE| – Computergetallenstelsels
==================================

:Author: Raphael ‘kena’ Poss

.. contents::

Algemene begrippen
------------------

.. index:: talstelsel
.. index:: getallenstelsel
.. index:: numeral system

Een talstelsel, getallenstelsel of getallensysteem is een wiskundig
systeem om getallen voor te stellen [#]_. Ze heten ook *numeral
system* in het Engels.

.. [#] https://nl.wikipedia.org/wiki/Talstelsel

We maken in de informatica heel vaak een verschil tussen de *waarde*
van een getal en zijn *representatie*.

Bijvoorbeeld, de hoeveelheid appels in "twintig appels" kunnen we
*weergeven* als "20", "14", "10100", "24", afhankelijk van het
talstelsel.

.. index:: positiestelsel
.. index:: positional notation

Een *positiestelsel* (*positional notation* in het Engels) is een
talstelsel waar de representatie van getallen opgebouwd wordt door de
cijfers te lezen of schrijven in een vaste richting. Dit is de meest
gangbare soort talstelsel. De onderscheid bestaan omdat bv. romeinse
getallen geen positiestelsel vormen.

In het dagelijks leven ben je al gewend aan 3 positiestelsels: 10, 12
(voor uren) en 60 (voor seconden en minuten). Je weet bijvoorbeeld al
dat de hoeveelheden seconden in "48 seconden + 30 seconden"
vaker weergegeven wordt als "1:18" dan "78".

In de informatica zijn 3 extra positiestelsels belangrijk: 2 (binair), 8
(octaal) en 16 (hexadecimaal). Daarmee zijn hoeveelheiden in
programma's en verschillende tools uitgedrukt.

Onderliggende wiskunde
----------------------

.. index:: grondtal
.. index:: radix
.. index:: base, number
.. index:: binair
.. index:: octaal
.. index:: hexadecimaal

Een positioneel talstelsel met grondtal *b* (:math:`b > 1`, Engels: *radix* of *base*)
wordt gebaseerd op *b* verschillende symbolen, of *cijfers*.

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
:math:`n_{10}` (representatie met grondtal 10), bijvoorbeeld we
schrijven de waarde van "honderd en trieentwintig" als :math:`123_{10}`.

Bijvoorbeeld, met :math:`b = 10_{10}`, het getal geschreven als "456" heeft
:math:`c_2 = 4_{10}, c_1 = 5_{10}, c_0 = 6_{10}` en zijn waarde is dus:

.. math::

   \begin{array}{rl}
   w & = c_2 \cdot (10_{10})^2 + c_1 \cdot (10_{10})^1 + c_0 \cdot (10_{10})^0 \\
     & = 4_{10} \cdot 100_{10} + 5_{10} \cdot 10_{10} + 6_{10} \cdot 1_{10} \\
     & = 456_{10}
   \end{array}

Hetzelfde representatie "456", geïnterpreteerd met grondtal :math:`8_{10}`, heeft dan als waarde:

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

   Het getal "456" is niet een geldige representatie in grondtal 2, omdat
   dit positiestelsel maar 2 cijfers heeft!

Van waarde naar representatie
`````````````````````````````

De representatie van een waarde *w* wordt berekend met de volgende formule:

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

De programmeertal C (en zijn opvolgers inclusief Java, JavaScript en
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
  :math:`2^{24}` ongeveer 16 miljioen                    0x1000000
  :math:`2^{32}` ongeveer 4 miljiard                     0x100000000
  ============== ===================== ================= ===============

- een *bit* is een cijfer met grondtal 2 (0 of 1).
- een *byte* is een groep van 8 bits.
- een *nibble* is een groep van 4 bits. Ieder hexadecimaal cijfer is gecodeerd met precies 1 nibble.

Conversies in de programmeertaal C
----------------------------------

- conversie van representatie naar waarde:

  - in grondtal 10: |atoi(3)|_, |atol(3)|_

  - in grondtal *n* met :math:`2 \leq n \leq 36`: |strtol(3)|_, |strtoul(3)|_, |strtoimax(3)|_, |strtoumax(3)|_.

- conversie van waarde naar representatie in grondtal 8 of 16: |printf(3)|_, |snprintf(3)|_:

  .. code:: c

     printf("%x\n", 123);  // produceert 7b
     printf("%#x\n", 123); // produceerd 0x7b
     printf("%o\n", 123);  // produceert 173
     printf("%#o\n", 123); // produceert 0173

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

5. Schrijf voor jezelf een programma die als invoerparameters een
   positief decimaal getal *N* en een nieuwe grondgetal *b* accepteert
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
