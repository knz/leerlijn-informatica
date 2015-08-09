.. include:: common.d

|WPRE1| – Beamer (basis)
==========================

:Author: Raphael ‘kena’ Poss

.. contents::

Waarom presenteren met LaTeX?
-----------------------------

.. index:: dia's
.. index:: presentaties
.. index:: Beamer (LaTeX)
.. index:: LaTeX (Beamer)

Waarom LaTeX (en Beamer) wanneer Google Presentaties, Keynote,
Powerpoint enz. ook beschikbaar zijn?

- omdat het daarmee heel eenvoudig is om complexe formules en/of
  complexe grafieken in je dia's te plaatsen.

- omdat het resultaat altijd zeer professioneel eruit ziet.

- omdat het resultaat niet zal veranderen wanneer je tool wordt
  geupgrade naar een nieuwere versie.

- omdat LaTeX zeer lang zal blijven bestaan (tientallen jaren). Je
  hoeft geen nieuwe tool te leren zodra de ene niet meer beschikbaar /
  ondersteund is.

Je eerste presentatie
---------------------

1. Plak de volgende code in je teksteditor, en bewaar het als
   :file:`test.tex`.

   .. literalinclude:: beamerexample.tex
      :language: latex

2. Draai :program:`latexmk -pdf test.tex`

   (of eventueel gewoon :program:`pdflatex test.tex` als
   :program:`latexmk` niet beschikbaar is)

3. Kijk naar het resultaat :file:`test.pdf` en zie je voor jezelf.

Richtlijnen voor het structureren
---------------------------------

- Hoeveel dia's moet je aanmaken?

  Tel ongeveer 1-2 minuten per dia tijdens de
  presentatie. Bijvoorbeeld als je 15mn moet presenteren, gebruik niet
  meer dan 7-15 dia's.

- Neem het volgende advies van Simon Peyton-Jones, een heel belangrijke
  wetenschapper en competent docent in de informatica:

   When writing slides remember that people can read and take in only
   very little information. Six or seven "things" on one slide is
   quite enough.

   Slides shouldn't repeat what you plan to say, but they should
   emphasise it; don't waste visual bandwidth on things you are also
   going to say. People who copy their paper onto slides and then read
   from them are immensely irritating. You should plan to talk ABOUT
   what's on your slides, not read it. (This may mean you need
   separate notes to remind you of what you want to say.)

   It is conventional to start with a contents slide, giving the
   outline of your talk. Don't. It takes a precious minute to talk
   through it, and your audience won't understand it till
   later. Certainly never include such trivia as "introduction",
   "conclusion". These are understood as a necessary part of every
   talk.

   On the other hand, about a third of the way through, it can be
   quite helpful to draw breath with a slide which says "This is
   what I have discussed so far, and now I'm going on to cover these
   areas", or some such. This can help to re-orient your audience,
   and make it clear that this is the moment to ask questions if they
   are lost already. Another way to add signposts is to begin each
   section of your talk with a slide containing only the title of the
   section.

   -- Simon Peyton-Jones, `How to give a good research talk`_, 1993

Simpele animaties
-----------------

.. index:: animaties (in dia's)

Binnen een dia kun je ook inhoud stap voor stap laten zien tijdens het
presenteren. Bijvoorbeeld:

.. literalinclude:: beamerexample2.tex
   :language: latex

Het commando ``\pause`` maakt een pause in de weergave. Probeer het
voor jezelf!

Thema's - uiterlijk aanpassen
-----------------------------

Je kunt het algemene thema van je presentatie aanpassen
door het commando ``\usetheme{...}`` vóór ``\begin{document}``, bijvoorbeeld:

.. code-block:: latex

   \usetheme{wolverine}

Hier vind je en demo van alle standaard beschikbare thema's:

   https://www.hartwork.org/beamer-theme-matrix/

(Zelf)evaluatie
---------------

1. Wat is het minimale LaTeX document om een dia te maken?

   .. admonition:: Oplossing
      :class: toggle

      .. code-block:: latex

         \documentclass{beamer}
         \begin{document}
         \begin{frame}
           De dia.
         \end{frame}
         \end{document}

2. Wat is het Beamer commando om de titel van de hele presentatie aan
   te passen?

   .. admonition:: Oplossing
      :class: toggle

      ``\title{...}`` vóór ``\begin{document}``.

3. Hoe kan je stap voor stap drie woorden laten zien binnen een dia
   tijdens de presentatie?

   .. admonition:: Oplossing
      :class: toggle

      Met ``\pause``:

      .. code-block:: latex

         eerste \pause tweede \pause derde

Verder inlezen
--------------

- Till Tantau, Joseph Wright, Vedran Miletić et al. `The BEAMER class, User Guide`__.

  .. __: http://mirrors.ctan.org/macros/latex/contrib/beamer/doc/beameruserguide.pdf

- Simon Peyton-Jones, `How to give a good research talk`_, 1993

  ..  _`How to give a good research talk`: http://research.microsoft.com/en-us/um/people/simonpj/papers/giving-a-talk/giving-a-talk-html.html#Visual_aids
