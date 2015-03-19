import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.io.IOException;
import java.io.Serializable;

class Cat implements Serializable {
    private String name;

    public Cat(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }
}

public class Main {
    public static void main(String[] args) {
        Cat myCat = tryLoadingMyCat();
        if (args.length == 0) {
            if (myCat == null) {
                String msg = "Your cat does not exist!";
                System.out.println(msg);
            } else {
                System.out.printf("Meow! My name is %s!\n", myCat.getName());
            }
        } else {
            if (myCat != null) {
                String msg = "You already have a cat! Don't be greedy!";
                System.out.println(msg);
            } else {
                String name = args[0];
                String msg = "You are my cat, and I will name you %s.\n";
                System.out.printf(msg, name);
                myCat = new Cat(name);
            }
        }
        saveMyCat(myCat);
    }

    private static Cat tryLoadingMyCat() {
        Cat myCat = null;
        File myCatFile = new File("myCat.ser");
        if (myCatFile.exists()) {
            try {
                FileInputStream fileIn = new FileInputStream(myCatFile);
                ObjectInputStream objectIn = new ObjectInputStream(fileIn);
                myCat = (Cat) objectIn.readObject();
            } catch (IOException e) {
                String msg = "IOException while loading myCat.";
                System.out.println(msg);
            } catch (ClassNotFoundException e) {
                String msg = "ClassNotFoundException while loading myCat.";
                System.out.println(msg);
            }
        }
        return myCat;
    }

    private static void saveMyCat(Cat myCat) {
        if (myCat == null) {
            return;
        }
        try {
            File myCatFile = new File("myCat.ser");
            FileOutputStream fileOut = new FileOutputStream(myCatFile);
            ObjectOutputStream objectOut = new ObjectOutputStream(fileOut);
            objectOut.writeObject(myCat);
        } catch (IOException e) {
            String msg = "IOException while saving myCat.";
            System.out.println(msg);
        }
    }
}
