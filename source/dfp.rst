.. include:: common.d

|DFP+| – Zwevendekommagetallen
===============================

:Auteur: Raphael ‘kena’ Poss

.. contents:: Inhoud
   :local:

Wat je absoluut moet weten
--------------------------

.. index:: floating point
.. index:: zwevende kommagetal
.. index:: drijvende kommagetal
.. index:: afrondfout

- "Zwevendekommagetallen" (soms "drijvende kommagetallen") heten
  in het Engels *floating point numbers* (afgekort "FP").

- Een zwevendekommagetal is een *benadering* van een (wiskundige) reëel getal.

- In de computer worden zwevendekommagetallen opgeslagen in 3 delen:

  .. index:: mantisse
  .. index:: exponent

  - het teken (+1 of -1)
  - een eerst geheel getal, de *mantisse*
  - een tweede geheel getal, de *exponent*

- De *waarde* *r* van een zwevende kommagetal met onderdelen
  :math:`(s, m, e)` in grondtal *b* is:

  .. math::

     r = s \cdot m \cdot b^e

- Elk getal heeft meerdere mogelijke representaties. Bijvoorbeeld 123
  kan worden uitgedrukt met grondtal 10 als (+1, 123, 0) of (+1,
  12300, -2).

- In het bijzonder, maken veel formules gebruik van het verschil
  tussen positief nul (+1, 0, 0) en negatief nul (-1, 0, 0),
  genoteerd +0 en -0.

- Sommige reële getallen kennen geen exacte codering als
  zwevendekommagetal (bijvoorbeeld :math:`\pi`). Wanneer z'n reëel
  getal word geconverteerd naar een zwevendekommagetal,
  ontstaat een *afrondfout*.

- **Door afrondfouten is het vaak onverstandig om
  zwevendekommagetallen direct met elkaar te vergelijken.** In plaats
  daarvan kun je de afwijking tussen de te vergelijken waardes
  vergelijken met een drempel :math:`\epsilon`, bijvoorbeeld:

  .. code-block:: c

     if (fabs(a - b) < 0.0001) // ipv a == b

- De meeste zwevendekommagetalformaten kennen bijzondere
  vormen om de volgende speciale waardes te coderen:

  .. index:: NaN

  - *NaN* (Engels: "Not A Number"), het speciaal resultaat van een
    wiskundige berekening die in de wiskunde geen resultaat
    kent. Bijvoorbeeld ``sqrt(-1)``, ``log(-0)`` of 0/0.

  - :math:`+\infty` (positieve oneindigheid), het resultaat van bv. 1/0.

  - :math:`-\infty` (negatieve oneindigheid), het resultaat van bv. ``log(+0)`` of -1/0.

  Deze waardes zijn terug te vinden in C:

  =============== ================ ==================
  Getal           Constante        Testen met
  =============== ================ ==================
  NaN             ``NAN``          |isnan(3)|_
  :math:`+\infty` ``+INFINITY``    |isfinite(3)|_
  :math:`-\infty` ``-INFINITY``    |isfinite(3)|_
  =============== ================ ==================

- Binnen de computer worden zwevendekommagetallen vaakst gecodeerd in
  grondtal 2, met de volgende standaard parameters:

  .. index:: half precision
  .. index:: single precision
  .. index:: double precision
  .. index:: quad precision

  .. list-table::
     :widths: 20 10 10 10 10 10
     :header-rows: 1

     * - Totaal aantal bits in codering
       - 16
       - 32
       - 64
       - 80
       - 128
     * - Grootte in geheugen
       - 2 bytes
       - 4 bytes
       - 8 bytes
       - 10 of 16 bytes
       - 16 bytes
     * - Gesproken naam
       - half precisie
       - single precisie
       - double (dubbele) precisie
       - extended double precisie
       - quad precisie
     * - Officieel naam in IEEE 754
       - binary16__
       - binary32__
       - binary64__
       - (geen)
       - binary128__
     * - Datatype in C
       - (geen)
       - ``float``
       - ``double``
       - soms ``long double``
       - soms ``long double`` of ``__float128``
     * - Aantal bits voor de mantisse
       - 10
       - 23
       - 52
       - 64
       - 112
     * - Precisie van de mantisse
       - 11
       - 24
       - 53
       - 64
       - 113
     * - Aantal bits voor de exponent
       - 5
       - 8
       - 11
       - 15
       - 15
     * - Aantal decimaal cijfers
       - ~3.3
       - ~7.2
       - ~15.9
       - ~19.3
       - ~34.0
     * - Kleinst codeerbaar strikt positief getal
       - :math:`\approx 6.10\times 10^{-5}`
       - :math:`\approx 1.18\times 10^{-38}`
       - :math:`\approx 2.23\times 10^{-308}`
       - :math:`\geq 3.35\times 10^{-4932}`
       - :math:`\approx 3.36\times 10^{-4932}`
     * - Grootst codeerbaar positief getal
       - 65504
       - :math:`\approx 3.40\times 10^{38}`
       - :math:`\approx 1.80\times 10^{308}`
       - :math:`\leq 1.20\times 10^{4932}`
       - :math:`\approx 1.20\times 10^{4932}`

  .. __: https://en.wikipedia.org/wiki/Half-precision_floating-point_format
  .. __: https://en.wikipedia.org/wiki/Single-precision_floating-point_format
  .. __: https://en.wikipedia.org/wiki/Double-precision_floating-point_format
  .. __: https://en.wikipedia.org/wiki/Quadruple-precision_floating-point_format

Conversie in de programmeertaal C
---------------------------------

- Van representatie naar waarde: |strtof(3)|_, |strtod(3)|_, |strtold(3)|_.

- Van waarde naar representatie: |printf(3)|_, |snprintf(3)|_. Bijvoorbeeld:

  .. code-block:: c

     printf("%g\n", 314.);   // geeft 314 (grondtal 10)
     printf("%e\n", 314.);   // geeft 3.140000e+02 (grondtal 10)
     printf("%A\n", 314.);   // geeft 0x1.3Ap+8 (grondtal 16)

(Zelf)evaluatie
---------------

1. Er wordt vaak gezegd dat je als programmeur "nooit
   zwevendekommagetallen met elkaar moet vergelijken". Wat betekent
   dit?

   .. admonition:: Oplossing
      :class: toggle

      In veel programmeertallen zal de vergelijkoperatie (bv. ==, !=)
      de codering vergelijken. Door afrondingsfouten kan de codering
      van een resultaat afwiken van de reëele waarde, waardoor de
      directe vergelijking mislukt. Het is dus verstandig om niet
      zwevendekommagetallen direct met elkaar te vergelijken, en in
      plaats daarvan het verschil tussen de twee getallen vergelijken
      met een drempel.

2. Je programma probeert 65536 te converteren naar een half-float. Wat is het resultaat?

   .. admonition:: Oplossing
      :class: toggle

      :math:`+\infty`, want er zijn maar 11 bits in de mantisse van
      half floats en 65536 heeft 16 bits nodig voor zijn codering.

3. Je maakt een tabel van 1000 zwevendekommagetallen in dubbele
   precisie. Hoe veel ruimte heb je nodig in geheugen?

   .. admonition:: Oplossing
      :class: toggle

      8 kilobytes (8000 bytes), omdat elk getal 64 bits nodig heeft.

4. Wat is het resultaat van :math:`\frac{0}{10^{50}}` in single
   precisie? En in dubbele precisie?

   .. admonition:: Oplossing
      :class: toggle

      Single precisie: NaN, want :math:`10^{50}` past niet in het 32-bit formaat.

      Dubbele precisie: 0.

Verder inlezen
--------------

- Josh Haberman, *What every computer programmer should know about
  floating point, part 1.*. `Self published`__, 1994.

  .. __: http://blog.reverberate.org/2014/09/what-every-computer-programmer-should.html

- David Goldberg. *What every computer scientist should know about
  floating point arithmetic.*. ACM Computing Surveys, 1991. (Citaat__, PDF__)

  .. __: http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.22.6768
  .. __: http://cr.yp.to/2005-590/goldberg.pdf
