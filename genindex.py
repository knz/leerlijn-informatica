# coding: utf-8

from __future__ import print_function
import re
import os.path

vre = re.compile(r'\|([USDTWX][A-Z0-9+]+)\|_')
vs = set() # vaardigheden

print("""
.. THIS FILE WAS AUTOMATICALLY GENERATED
.. (vanuit de inbeddingstabel in inleiding-studenten.rst)
.. MANUAL MODIFICATIONS WILL BE LOST

.. toctree::
   :maxdepth: 2

   inleiding-studenten
   inleiding-docenten
""")

with open("source/inleiding-studenten.rst") as f:
    for line in f:
        if "Inbedding" in line:
            break;
    lines = []
    for line in f:
        line = line.strip()
        if not line.startswith(".."):
            lines.append(line)

    for m in vre.finditer(''.join(lines)):
        p = m.group(1).lower().replace('+','')
        print("   "+ p)
