.. include:: common.d

|USH| – Unix shell
==================

:Author: Raphael ‘kena’ Poss

.. contents:: Inhoud
   :local:

Soorten shell
-------------

.. index:: bash
.. index:: ash
.. index:: tcsh
.. index:: csh
.. index:: zsh

Je zal kennis maken met verschillende unix shells tijdens je studie en
je werk daarna:

.. list-table::
   :widths: 10 10 20 40
   :header-rows: 1

   * - Naam
     - Programma
     - Standaard
     - Opmerkingen
   * - `Bourne shell`_
     - :program:`bash`
     - OS X, vaak op Linux
     - Medium-groot geheugengebruik
   * - `Almquist shell`_, Debian Almquist shell
     - :program:`ash`, :program:`dash`
     - Android, BSD, Debian, Ubuntu
     - Sneller en lichter dan de Bourne shell
   * - `Z shell`_
     - :program:`zsh`
     - Beschikbaar als softwarepakket
     - Heel krachtige features voor ontwikkelaars. **Dit wil je!** [#]_
   * - `C shell`_
     - :program:`tcsh`, :program:`csh`
     - Vaak standaard beschikbaar
     - Heel andere syntax dan de anderen. Niet goed voor
       productiviteit. **Dit wil je absoluut vermeiden!** [#]_

.. _`Bourne shell`: https://en.wikipedia.org/wiki/Bourne_shell
.. _`Almquist shell`: https://en.wikipedia.org/wiki/Almquist_shell
.. _`Z shell`: https://en.wikipedia.org/wiki/Z_shell
.. _`C shell`: https://en.wikipedia.org/wiki/C_shell
.. [#] http://reasoniamhere.com/2014/01/11/outrageously-useful-tips-to-master-your-z-shell/
.. [#] http://www.faqs.org/faqs/unix-faq/shell/csh-whynot/


Prompt
------

.. index:: prompt
.. index:: .profile (prompt aanpassen)
.. index:: PS1

Een :def:`prompt` is een tekenreeks waarbij een programma aanduidt dat het
klaar is om een nieuwe opdracht uit te voeren.

Je zal tenminstens twee programma's gebruiken met een prompt tijdens
je studie:

- de shell: "``$``" of "``#``"
- Python: "``>>>``"

De prompt in de shell wordt ook gebruikt om extra informatie aan te
geven over de toestand van de shell. Bijvoorbeeld is het gebruikelijk om
ook de huidige map (zie |UCMD|_) daar weer te geven:

.. code-block:: shell

   /home/kena $ cd ..
   /home $ cd /var
   /var $ cd /usr/local
   /usr/local $

.. tip:: Je kunt ook de prompt van je shell zelf aanpassen!
   :class: toggle

   Dit doe je als volgt:

   - voor alleen je huidige shell, door de variabele ``PS1`` aan te passen, bijvoorbeeld:

     .. code-block:: shell

        $ export PS1='hello world $ '
        hello world $ cd ..
        hello world $ pwd
        /home
        hello world $ export PS1='hello \w $ '
        hello /home $ cd /etc
        hello /etc $

     Zoals je hier kunt zien, vertaalt de shell "``\u``" in ``PS1`` automatisch
     naar je huidige map. Raadpleeg de manpage van je shell om de verschillende
     mogelijkheden te onderzoeken.

   - voor alle shells, door de variabele ``PS1`` aan te passen in het
     bestand :file:`~/.profile`. Dit maak je aan in een teksteditor als
     het nog niet bestaat. Je moet opnieuw inloggen om de veranderingen
     erin te zien in alle shells.

History
-------

.. index:: history (shell)

De meeste shells houden de geschiedenis van je opdrachten bij.

- Het laatste commando roep je weer aan door de toets :kbd:`Up` (pijl omhoog).
- Je kunt zoeken door de hele geschiedenis van je shell door :kbd:`Ctrl+R`. Probeer het eens!

Jokertekens
-----------

.. index:: jokerteken
.. index:: wildcard
.. index:: pattern (wildcard)
.. index:: patroon (joker, in shell)
.. index:: glob patterns

- Je kunt in een commandolijn automatisch meerdere bestandsnamen
  selecteren door middel van :def:`jokertekens` (Engels: :def:`wildcard`).

  Een woord dat jokertekens bevat op een commandolijn heet een :def:`joker
  patroon` (Engels: :def:`wildcard pattern`). Ze heten ook soms :def:`glob patterns` in het Engels.

- De shell vervangt alle patronen automatisch door de namen van de bestanden die
  met het patroon overeenkomen.

  Als geen bestand met een geschikte naam wordt gevonden, wordt het
  patroon niet vervangen, en geeft de shell soms een foutmelding.

- Bijvoorbeeld:

  .. code-block:: shell

     $ ls
     Hello.java   Makefile     a.out    bar.o   foo.c   genindex.py  source
     MF           README.rst   bar.c    build   foo.o   genlinks.py  test
     $ ls *.py
     genindex.py genlinks.py

- Het jokerteken "``*``" staat voor "alle tekenreeksen van 0 of meer
  karakters".

  Het jokerteken "``?``" staat voor "één karakter".

  Het jokerteken "``[a-z]``" staat voor "één karakter in het bereik van
  ``a`` tot/met ``z``". Bijvoorbeeld "``[0-9]``" staat voor "een cijfer
  tussen 0 en 9".

- Bijvoorbeeld:

  .. code-block:: shell

     $ touch foo1.tar foo2.txt foo3.tar.gz
     $ ls *.t*
     foo.tar foo.txt foo.tar.gz
     $ ls *.t??
     foo.tar foo.txt
     $ ls t*
     no matches found: t*
     $ ls foo[2-5].*
     foo2.txt foo3.tar.gz

- **je kunt het vervangen van een patroon uitschakelen door
  het patroon te plaatsen tussen aanhalingstekens.** Bijvoorbeeld:

  .. code-block:: shell

     $ touch foo1.tar foo2.txt foo3.tar.gz
     $ echo foo1*
     foo1.tar
     $ echo "foo1*"
     foo1*

  Dit heb je eerder gezien met het commando |find(1)|_ (|UCMD|_),
  die bestanden zoekt ook op patroon:

  .. code-block:: shell

     $ find . -name "foo1*"

  Als je geen aanhalingstekens gebruikt met |find(1)|_, zal de shell
  het patroon vervangen voordat |find(1)|_ wordt aangeroepen, en
  |find(1)|_ heeft dan geen patroon meer om mee te werken.

Omgevingsvariabelen
-------------------

.. index:: omgevingsvariabele
.. index:: environment variable
.. index:: export (shell)
.. index:: PATH
.. index:: TMPDIR
.. index:: HOME
.. index:: SHELL (omgevingsvariabele)
.. index:: EDITOR (omgevingsvariabele)

- Op Unix kunnen programma's data invoeren door 3 mechanismen:

  - door invoerbestanden,
  - door commandolijn argumenten, bijvoorbeeld "``-l``" in :program:`ls -l`
  - door :def:`omgevingsvariabelen` (Engels: :def:`environment variables`).

  (Je hebt al z'n variabele hierboven gezien: ``PS1`` die de prompt van
  je shell configureert.)

- een omgevingsvariabele zet je in je shell met het commando
  :program:`export`, bijvoorbeeld:

  .. code-block:: shell

     export PS1=hai

- Omgevingsvariabelen worden geerfd door processen: als je er een zet
  in process A, en A later proces B aanmaakt, is de variabele ook in B
  beschikbaar.

- De volgende *standaardvariabelen* zijn door je unixomgeving gezet en dus
  beschikbaar in alle shells en andere programma's. Ze zijn redelijk
  belangrijk en vaak nuttig, je kunt ze dus uit je hoofd leren:

  ============== ===================================
  Variabele      Rol
  ============== ===================================
  ``PATH``       Lijst van mappen waar commando's worden gezocht
  ``HOME``       Je thuismap.
  ``TMPDIR``     Een map waar je tijdelijke bestanden kunt aanmaken
                 (wordt automatisch gewist wanneer de computer opstart)
  ``SHELL``      De naam van je shellprogramma
  ``PS1``        De prompt van je shell
  ``EDITOR``     De naam van je favoriete teksteditor
                 (wordt automatisch gebruikt door andere programma's
                 om een editor aan te roepen).
  ============== ===================================

- Je kunt de lijst van alle omgevingsvariabelen weergeven in je shell
  door het commando :program:`env`.

- Je kunt de huidige waarde van een omgevingsvariabele in Python of C
  ook opvragen. In Python doe je dit met
  bv. :code:`os.getenv("TMPDIR")` en in C met
  :code:`getenv("TMPDIR")`.

- De volgende omgevingsvariabelen worden automatisch opgepakt door
  |make(1)|_ (|DAUTO1|_) om C programma's te compileren:

  ============== ===================================
  Variabele      Rol
  ============== ===================================
  ``CC``         Selecteert de C compiler (bv. ``CC=gcc`` of ``CC=clang``)
  ``CPPFLAGS``   Toegevoegd voor preprocessing, bv. om ``-I`` te zetten
  ``CFLAGS``     Toegevoegd voor compilatie, bv. om ``-g`` of ``-O`` te zetten
  ``LDFLAGS``    Toegevoegd voor linking, bv. om ``-L`` of ``-l`` te zetten
  ============== ===================================

Variabelesubstitutie
--------------------

.. index:: substitutie (shell)
.. index:: expansie (shell)

- Je kunt de huidige waarde van een omgevingsvariabele in een shell
  gebruiken door een dollarteken gevolgd door de naam van de
  variabele. Dit heet :def:`substitutie` (Engels: :def:`substitution`)
  of soms :def:`expansie`. Bijvoorbeeld:

  .. code-block:: shell

     $ touch $TMPDIR/hello.txt
     $ ls $TMPDIR/*.txt
     hello.txt
     $ cd $TMPDIR; pwd
     /tmp

  De tekenreeks "``$TMPDIR``" wordt vervangen door de waarde van ``TMPDIR`` voordat
  het commando wordt aangeroepen.

- Het is ook mogelijk om de naam van de variabele te plaatsen tussen accolades, bijvoorbeeld
  ``${TMPDIR}`` is gelijk aan ``$TMPDIR``. Dit is handig als je een tekst wil plakken
  na de waarde van een variabel, bijvoorbeeld:

  .. code-block:: shell

     $ echo $TMPDIRhello

     $ echo ${TMPDIR}hello
     /tmphello

- Tijdens de substitutie is het mogelijk om eenvoudige operaties uit te voeren
  om de waarde van de variabele:

  =============== ================================== =================================
  Syntax          Betekenis                          Voorbeeld
  =============== ================================== =================================
  ``${a#tekst}``  Verwijder "tekst" aan het begin    :program:`a=hello; echo ${a#he}` -> llo
  ``${a%tekst}``  Verwijder "tekst" aan het eind     :program:`a=hello; echo ${a%lo}` -> hel
  ``${#a}``       Geeft de lengte van de tekst       :program:`a=hello; echo ${#a}` -> 5
  ``${a:-tekst}`` Geeft "tekst" als ``a`` niet gezet :program:`echo ${b:-hello}` -> hello
  =============== ================================== =================================

  Vooral de eerste twee zijn handig wanneer je bestandsnamen wil veranderen, bijvoorbeeld
  een extensie vervangen door een andere:

  .. code-block:: shell

     $ a=hello.txt
     $ echo ${a%.txt}.html
     hello.html

  Voor meer mogelijkheden, kijk naar de sectie "Parameter expansion" in
  de manpage van je shell, bv. |sh(1)|_

- Als een variabele meerdere woorden bevat, worden ze gesplitst als meerdere
  argumenten tijdens de substitutie. Dit kun je uitschakelen om
  de substitutie tussen *dubbele* aanhalingstekens te plaatsen. Bijvoorbeeld:

  .. code-block:: shell

     $ a="hello.txt world.txt"
     $ ls $a
     hello.txt
     world.txt
     $ touch "lange naam met spaties.txt"
     $ a="lange naam met spaties.txt"
     $ ls $a
     ls: lange: no such file or directory
     ls: naam: no such file or directory
     ls: met: no such file or directory
     ls: spaties.txt: no such file or directory
     $ ls "$a"
     lange naam met spaties.txt

- Substitutie wordt uitgeschakeld wanneer het dollarteken zich bevindt in *enkele*
  aanhalingstekens, bijvoorbeeld:

  .. code-block:: shell

     $ a="hai man"
     $ echo "$a"
     hai man
     $ echo '$a'
     $a

  Dit gebruik je bijvoorbeeld wanneer je moet werken met bestandsnamen
  die een dollartekken bevatten.

Simpele programma's
-------------------

.. index:: for (shell)
.. index:: if (shell)
.. index:: short-circuit evaluatie (shell)

De shell heeft ook eigen programmeertaal, die zal je langzamerhand
leren. De volgende 4 constructies komen zo vaak voor en zijn zo handig
dat je ze alvast kunt leren:

- :program:`commando1 && commando2`: draai :program:`commando1`, en
  *alleen als het lukt* draai dan ook :program:`commando2`. Bijvoorbeeld:

  .. code-block:: shell

     mkdir project && cd project

- :program:`commando1 || commando2`: draai :program:`commando1`, en *alleen
  als het mislukt* draai dan ook :program:`commando2`. Bijvoorbeeld:

  .. code-block:: shell

     mkdir project || echo fout

- :program:`if commando1; then commando2; fi`: gelijk aan :program:`commando1 && commando2`

- :program:`for var in lijst...; do commando; done`: herhaal
  :program:`commando` met variabele *var* iedere keer gezet op een
  van de woorden in *lijst*. Bijvoorbeeld:

  .. code-block:: shell

     $ touch hello.html world.html
     $ for f in *.html; do echo ${f%.html}.txt; done
     hello.txt
     world.txt

(Zelf)evaluatie
---------------

1. Je logt in op een onbekende machine en je login prompt is alleen
   maar "``$``". Hoe verander je dit om ook je huidige map te printen?

   .. admonition:: Oplossing
      :class: toggle

      Eerst testen aan de prompt met bv.

      .. code-block:: shell

         export PS1='\w $ '  # of dergelijk

      Dans als het naar wens is, opslaan in :file:`~/.profile`.

2. De prompt "``\u@\h \w\$``" wordt vaak gebruikt met de Bourne
   shell. Wat geeft dit weer?

   .. admonition:: Oplossing
      :class: toggle

      De naam van de gebruiker (``\u``), de naam van de computer (``\h``),
      de huidige map (``\w``) en een dollarteken of hekje afhankelijk
      van de beheerderstatus (``\$``).

3. Je moet alle :file:`.htm` bestanden in een map hernoemen naar
   :file:`.html`. Sommigen bevatten spaties in hun naam. Hoe doe je dit?

   .. admonition:: Oplossing
      :class: toggle

      .. code-block:: shell

         for f in *.htm; do mv "$f" "${f%.htm}".html; done

      of eventueel:

      .. code-block:: shell

         for f in *.htm; do n=${f%.html}; mv "$f" "$n".html; done

4. Een map hoort een :file:`.jpg` bestand te bevatten per :file:`.html` bestand.
   Hoe zou je de lijst printen van alle :file:`.html` bestanden zonder
   bijbehorende :file:`.jpg`?

   .. admonition:: Oplossing
      :class: toggle

      .. code-block:: shell

         for f in *.htm; do test -r "${f%.htm}".jpg || echo "$f"; done

5. Je heeft een programma geïnstalleerd in :file:`~/bin`. Je wil hem makkelijk kunnen
   gebruiken vanaf een andere map. Wat doe je?

   .. admonition:: Oplossing
      :class: toggle

      .. code-block:: shell

         export PATH=$HOME/bin:$PATH


Verder inlezen
--------------

- Peter Stephenson. `A User's Guide to the Z-Shell`__. 2003.

  .. __: http://zsh.sourceforge.net/Guide/zshguide.htmlhttp://zsh.sourceforge.net/Guide/zshguide.html

- `explain shell`__: formulier om een gedetailleerde uitleg te krijgen
  over willekeurige commando's.

  .. __: http://explainshell.com/

- `manpage van Bash`__

  .. __: http://linux.die.net/man/1/bash

- GNU project. `Bash Reference Manual`__.

  http://www.gnu.org/software/bash/manual/bash.html
