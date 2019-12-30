# A projekt részletezése

Egy számítógép konfiguráció alapjául szolgáló alaplap, processzor és memória összeállítás kiválasztását segítő program 
készítése. A leírásban magyar elnevezéseket fogok használni az olvashatóság kedvéért, de a programban minden komponenst angolul fogok elnevezni.

A törzs osztály: KonfigurációVálasztó

Publikus metódus: 

- kiválasztMaximumÉrtékekAlapján

A metódusnak meg kell adni a három komponens maximum árát, és az osztály példánya ez alapján visszaadja az optimális konfigurációt.

Föggőségek: AlaplapLista, ProcesszorLista, MemóriaLista

A listák egy közös felületet valósítanak meg, melynek a publikus metódusai:

- hozzáad
- eltávolít
- kiválasztMaximumÉrtékAlapján

A listákat a hozzájuk tartozó osztályok példányaival kell feltölteni, és a metódus a beállított érték alapján visszaadja a megfelelőt.

# Tesztelendő metódusok

- Az egyes függőségek (Alaplap, Processzor, Memória) példányosítása, adatainak lekérdezése.
- A listák hozzáad és eltávolít metódusai
- A listák kiválasztMaximumÉrtékAlapján metódusai
- A KonfigurációVálasztó osztály kiválasztMaximumÉrtékekAlapján metódusa

# Mockolandó metódusok

- A KonfigurációVálasztó osztály tesztjében minden függőség
- A listák tesztjében minden függőség

# ToDo - "ha marad rá idő" címmel

UML ábra a függőségek ábrázolására
