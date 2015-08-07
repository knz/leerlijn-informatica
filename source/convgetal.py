from __future__ import print_function
import sys
n = int(sys.argv[1])
b = int(sys.argv[2])
if n == 0:
   print("0")
else:
   cijfers = "0123456789abcdefghijklmnopqrstuvwxyz"
   bk = 1
   while bk <= n / b:
       bk = bk * b
   while bk > 0:
      c = (n // bk) % b
      bk = bk / b
      print(cijfers[c], end='')
   print()
