from __future__ import print_function
import sys

# Read the two command line arguments
n = int(sys.argv[1])
b = int(sys.argv[2])

# Special case
if n == 0:
   print("0")
else:
   numbers = "0123456789abcdefghijklmnopqrstuvwxyz"
   bk = 1
   
   while bk <= n / b:
       bk = bk * b
       
   while bk > 0:
      c = (n // bk) % b
      bk = bk / b
      print(numbers[c], end='')
   print()