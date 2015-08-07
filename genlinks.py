from __future__ import print_function
import re
import glob

mre = re.compile(r'\|([a-zA-Z0-9]+\(\d+\))\|')
ms = set() # man pages

vre = re.compile(r'\|([USDTW][A-Z0-9+]+)\|')
vs = set() # vaardigheden

for fn in glob.glob('source/*.rst'):
    with open(fn) as f:
        t = f.read()
        for m in vre.finditer(t):
            vs.add(m.group(1))
        for m in mre.finditer(t):
            ms.add(m.group(1))

for gl in "sudtw":
    print(".. role:: %ctitle" % gl)

for v in vs:
    gl = v[0].lower()
    p = v.lower().replace('+','')
    print(".. |%s| replace:: :%ctitle:`%s`" % (v, gl, v))
    print(".. _`%s`: %s.html" % (v, p))

for m in ms:
    print(".. |%s| replace:: :manpage:`%s`" % (m, m))
    print(".. _`%s`: https://www.freebsd.org/cgi/man.cgi?query=%s" % (m, m))
