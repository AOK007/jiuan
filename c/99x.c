#include <stdio.h>

int main()
{
     int  n;
     scanf("%d",&n);
     n=9;
     int i,j;
     i=1;
    while ( i<=n ) 
    {
        j=1;
        while ( j <= i  )
        {
            printf("%d*%d=%d",j,i,i*j);
            if ( j*i <10){
                printf("   ");
            }else
            {
                printf("   ");
            }
            j++;
        }
        i++;
    }
        return 0;   


}
