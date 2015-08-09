.. include:: common.d

|WMATH1| – Formules (basis)
=============================

:Author: Raphael ‘kena’ Poss

.. index:: LaTeX (math)

In de wiskunde en de informatica, zal je de meeste wiskundige formules
uitdrukken in LaTeX documenten en presentaties. Het is dus belangrijk
dat je snel de LaTeX taal kent voor simpele formules, zodat je snel en
efficiënt formules kunt produceren.

.. contents::

Omgevingen
----------

.. index:: inline (math)
.. index:: block (math)

De meeste formules schrijf je tussen dollartekens, bijvoorbeeld
"``$x+y$``" ":math:`x+y`".

Er zijn twee soorten wiskundige *omgevingen* (Engels: *environments*):

============== ============================ ================================
Omgeving       *inline*                     *blok*
============== ============================ ================================
Voorbeeld      :math:`\sum_{i=0}^n2^i`      .. math::
                                               \sum_{i=0}^n2^i

Schrijf je met ``$...$`` of ``\(...\)``     ``$$...$$`` of ``\[...\]``
============== ============================ ================================

Inline wiskunde blijft compact, kun je gebruiken bv. binnen een zin,
maar het maakt het lezen van complexe formules moeilijker. Blok
wiskunde staat altijd op zijn eigen regel.

Wat je absoluut moet weten
--------------------------

.. index:: subscript (math)
.. index:: superscript (math)

- variabelen en functienamen van maar één letter schrijf je gewoon,
  bijvoorbeeld "``$x+f(x)$``" ":math:`x+f(x)`". Breedere woorden schrijf
  je altijf met ``\text{...}``, bijvoorbeeld "``$x+\text{sin}(x)$``"
  ":math:`x+\text{sin}(x)`". Als je dit niet doet, kan je woord heel
  lelijk eruitzien, bijvoorbeeld:

  - "``$fft(x)``" ":math:`fft(x)`" – kijk hoe ver de 2 "f" staan van
    elkaar!

  - "``\text{fft}(x)``" ":math:`\text{fft}(x)`" – alles goed.

- ondergeschreven (Engels: *subscript*) en erboven geschreven (Engels:
  *superscript*) tekens maak je met "``_``" en "``^``", bijvoorbeeld
  "``$x^2$``" ":math:`x^2`" en "``$x_i$``" ":math:`x_i`".

  Als je subscript of superscript langer dan 1 teken is, gebruik dan {...}:
  "``$x^{n+1}$``" ":math:`x^{n+1}`" en "``$x_{i+1}$``" ":math:`x_{i+1}`".

- som met: ``\sum_{i=1}^n``

  .. math::

     \sum_{i=1}^n

- een lege spatie tussen een formule en een conditie schrijf je met
  "``\quad``", bijvoorbeeld:

  ``y = \frac{x}{x+1} \quad \text{als }x \neq -1``

  :math:`y = \frac{x}{x+1} \quad \text{als }x \neq -1`

- "Gewone" haakjes blijven klein, zelfs rond een groot
  symbool. Gebruik ``\left(`` en ``\right)`` om ze automatisch te
  vergroten.

  .. list-table::
     :widths: 50 50
     :header-rows: 1

     * - Gewone haakjes
       - ``\left`` .. ``\right``

     * - .. math::
            (\sum_k 2^k)
       - .. math::
            \left(\sum_k 2^k\right)

     * - .. math::
            [\sum_k 2^k]
       - .. math::
            \left[\sum_k 2^k\right]

     * - .. math::
            \{\sum_k 2^k\}
       - .. math::
            \left\{\sum_k 2^k\right\}

- De griekse letters schrijf je met een ``\`` dan hun naam,
  bijvoorbeeld "``$\pi \theta$``" ":math:`\pi \theta`".

- Om heel snel voorbeelden op te kunnen zoeken, onthoud goed de link
  naar de `Wikibook: LaTeX/Mathematics`_.

(Zelf)evaluatie
---------------

1. In LaTeX is de wortel geschreven met ``\sqrt{...}``. Hoe schrijf je
   de formule voor de lengte van de diagonaal van een rechthoek met
   zijlengte *a* en *b* (formule van Pythagoras)?

   .. admonition:: Oplossing
      :class: toggle

      ``$d = \sqrt{a^2 + b^2}$``

      :math:`d = \sqrt{a^2+b^2}`

2. Hoe schrijf je de som van alle even getallen tussen 2 en 100
   inclusief?

   .. admonition:: Oplossing
      :class: toggle

      ``$2 + 4 + ... + 98 + 100$``

      :math:`2 + 4 + ... + 98 + 100`

      of: ``$\sum_{n=1}^{50} 2n$``

      .. math::
         \sum_{n=1}^{50} 2n

3. De formule van Euler zegt dat :math:`e^{i\pi} =
   \text{cos}(x)+i \text{sin}(x)`. Hoe schrijf je dit in LaTeX?

   .. admonition:: Oplossing
      :class: toggle

      ``$e^{i\pi} = \text{cos}(x)+i \text{sin}(x)``

Verder inlezen
--------------

- Various Authors. `Wikibook: LaTeX/Mathematics`_.

  .. _`Wikibook: LaTeX/Mathematics`: https://en.wikibooks.org/wiki/LaTeX/Mathematics
