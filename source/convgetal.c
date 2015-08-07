#include <stdlib.h>
#include <stdio.h>
#include <inttypes.h>

static const char cijfers[] = "0123456789abcdefghijklmnopqrstuvwxyz";

int main(int argc, char **argv)
{
    uintmax_t n = strtoumax(argv[1], 0, 0);
    unsigned b = atoi(argv[2]);

    if (n < b)
        printf("%c\n", cijfers[n]);
    else
    {
        uintmax_t bk = b;
        while (bk <= n / b)
            bk = bk * b;

        while (bk > 0)
        {
            uintmax_t c = (n / bk) % b;
            bk = bk / b;
            putchar(cijfers[c]);
        }
        putchar('\n');
    }

    return 0;
}
