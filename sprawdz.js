function sprawdz()
    {
        var liczba = document.getElementById("pole").value;
        //document.write(liczba);
        if(liczba>=18) document.getElementById("wynik").innerHTML="Gratulacje! Wygrałeś multiplę!";
        else if(liczba<18 && liczba>0) document.getElementById("wynik").innerHTML="Twoja multipla jest niepełnoletnia, idziesz do więzienia";
        else if(liczba<0) document.getElementById("wynik").innerHTML="Twoja multipla jeszcze się nie narodziła";
        else document.getElementById("wynik").innerHTML="Miałeś wpisać liczbę!";
    }