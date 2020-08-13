static int[] findPrimeNumbers(int a, int b) {
    int flag;
    System.out.println(a + ", " + b);
    int[] arrayOfPrimes = new int[b];
    int primeCounter = 0;

    // Traverse each number in the interval 
    // with the help of for loop 
    for (int i = a; i <= b; i++) { 

        // Skip 0 and 1 as they are 
        // niether prime nor composite 
        if (i == 1 || i == 0) 
            continue; 

        // flag variable to tell 
        // if i is prime or not 
        flag = 1; 

        for (int j = 2; j <= i / 2; ++j) { 
            if (i % j == 0) { 
                flag = 0; 
                break; 
            } 
        } 

        // flag = 1 means i is prime 
        // and flag = 0 means i is not prime 
        if (flag == 1) {
            System.out.println(primeCounter + " - " + i);
            arrayOfPrimes[primeCounter] = i;
            primeCounter++;
        }
    } 

    return arrayOfPrimes;
}
