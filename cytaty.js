// Wróżby z ciasteczka: śmieszne rozmowy w stylu IRC.
// Każdy cytat to lista linijek. Linijka "<nick> tekst" to wypowiedź,
// linijka zaczynająca się od "* " to akcja (np. ktoś wychodzi z kanału).
// Aby dodać nowy cytat, skopiuj jeden blok [ ... ], i zmień tekst.
const CYTATY = [
  [
    '<kasia> mój kot nauczył się otwierać lodówkę',
    '<marek> to już nie kot, to współlokator',
    '<kasia> czynsz płaci w myszach',
  ],
  [
    '<tomek> szefie, serwer nie działa',
    '<szef> próbowałeś wyłączyć i włączyć?',
    '<tomek> tak',
    '<szef> to teraz włącz i wyłącz',
  ],
  [
    '<ola> kupiłam kwiatka, którego „nie da się zabić”',
    '<ola> aktualizacja: da się',
  ],
  [
    '<bartek> mama dzwoni zapytać, czy jadłem',
    '<bartek> 31 lat, informatyk, własne mieszkanie',
    '<bartek> nie, nie jadłem',
  ],
  [
    '<adam> napisałem kod, który zadziałał za pierwszym razem',
    '<ewa> i co teraz?',
    '<adam> boję się go dotknąć',
  ],
  [
    '<zosia> dobra, idę na siłownię',
    '* zosia has quit (Ping timeout: 3 miesiące)',
  ],
  [
    '<piotr> czemu programiści mylą Halloween z Bożym Narodzeniem?',
    '<piotr> bo OCT 31 == DEC 25',
    '* 5 osób opuściło kanał',
  ],
  [
    '<mati> ile kosztuje ta drukarka?',
    '<sprzedawca> 199 zł',
    '<mati> a tusz do niej?',
    '<sprzedawca> nerka',
  ],
  [
    '<ania> gotuję pierwszy raz rosół',
    '<ania> ile wody dać na kurczaka?',
    '<kuba> zależy, czy kurczak umie pływać',
  ],
  [
    '<wojtek> babcia założyła fejsa',
    '<wojtek> właśnie skomentowała moje zdjęcie z 2009',
    '<wojtek> „ZAŁÓŻ CZAPKĘ”',
  ],
  [
    '<magda> chłopak mówi, że jestem jak Windows',
    '<magda> myślałam, że to komplement',
    '<magda> chodziło o to, że się zawieszam, jak robię za dużo rzeczy naraz',
  ],
  [
    '<rafał> zrobiłem dziś 10 000 kroków',
    '<rafał> głównie do lodówki i z powrotem',
  ],
  [
    '<krzys> sąsiad wierci od 7 rano',
    '<krzys> w niedzielę',
    '<krzys> od 2014 roku',
  ],
  [
    '<ula> w CV napisałam „odporna na stres”',
    '<ula> na rozmowie zapytali o moje mocne strony',
    '<ula> rozpłakałam się',
  ],
  [
    '<iza> pies zjadł mi pracę domową',
    '<szef> masz 34 lata i jesteś księgową',
    '<iza> pies zjadł mi PIT',
  ],
  [
    '<michał> git push --force',
    '<michał> o',
    '<michał> o nie',
    '* michał is now known as michał_szuka_pracy',
  ],
  [
    '<kamil> mówią, że pieniądze szczęścia nie dają',
    '<kamil> wolałbym to sprawdzić osobiście',
  ],
  [
    '<asia> zamówiłam sukienkę z chińskiego sklepu',
    '<asia> przyszła sukienka dla lalki',
    '<asia> lalka zadowolona',
  ],
  [
    '<filip> tata naprawia kran od 3 godzin',
    '<filip> mamy już fontannę w łazience',
    '<filip> tata mówi, że tak miało być',
  ],
  [
    '<gosia> czemu w poniedziałek o 8 rano nikt nie jest szczęśliwy?',
    '<tomasz> bo szczęśliwi jeszcze śpią',
  ],
  [
    '<bot> Przypomnienie: dziś Dzień bez Internetu!',
    '* bot has quit (No route to host)',
  ],
  [
    '<marta> dieta od jutra',
    '<marta> (wiadomość wysłana 2 stycznia 2019)',
  ],
  [
    '<łukasz> ilu programistów trzeba do wymiany żarówki?',
    '<łukasz> żadnego, to problem sprzętowy',
  ],
  [
    '<hania> kot położył się na klawiaturze',
    '<hania> wysłał szefowi „jjjjjjjjjjjjjjjjjj”',
    '<hania> szef odpisał „ok, zgoda”',
    '<hania> nie wiem, na co się zgodził',
  ],
  [
    '<seba> ustawiłem w nawigacji głos Yody',
    '<seba> „W prawo skręcić musisz. Trasę przeliczam, hmm.”',
  ],
  [
    '<wiktor> żona: kup mleko, a jak będą jajka, weź sześć',
    '<wiktor> wróciłem z sześcioma mlekami',
    '<wiktor> były jajka',
  ],
  [
    '<ola> babcia pyta, czym się zajmuję',
    '<ola> powiedziałam, że pracuję w chmurze',
    '<ola> babcia od tygodnia się za mnie modli',
  ],
  [
    '<darek> pani w sklepie: „proszę przyłożyć kartę”',
    '<darek> 30 lat, a dalej się stresuję, że terminal mnie nie polubi',
  ],
  [
    '<jola> mąż powiedział, że ma mi coś ważnego do powiedzenia',
    '<jola> serce mi stanęło',
    '<jola> skończyło mu się masło orzechowe',
  ],
  [
    '<igor> czy ktoś wie, jak wyjść z vima?',
    '<igor> pytam od 2017 roku',
  ],
];
