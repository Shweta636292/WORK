import java.util.Scanner;

public class App {
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int n = sc.nextInt();
        int largest = 0;
        int a;

        while (n > 0) {
            a = n % 10;

            if (a > largest) {
                largest = a;
            }

            n = n / 10;
        }

        System.out.println(largest);
        sc.close();
    }
}
    