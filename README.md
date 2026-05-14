# Merytoryka i Podstawy Projektu Licencjackiego

**Temat:** Projektowanie i implementacja skalowalnej aplikacji internetowej dla biura podróży w architekturze Serverless z wykorzystaniem Amazon Web Services (AWS).

---

## 1. Wstęp i Cel Pracy

* **Cel projektu:** Zaprojektowanie i implementacja wysoce dostępnej, skalowalnej aplikacji internetowej dla biura podróży z wykorzystaniem usług chmurowych.
* **Uzasadnienie biznesowe:** Wykorzystanie modelu Serverless pozwala na znaczną redukcję kosztów operacyjnych (płatność tylko za rzeczywiste zużycie zasobów) oraz eliminuje konieczność zarządzania tradycyjnymi serwerami (autoskalowanie w przypadku nagłego wzrostu ruchu, np. w sezonie wakacyjnym).

## 2. Analiza Wymagań (Zakres MVP - Minimum Viable Product)

* **Funkcjonalności dla klienta:**
    * Wyświetlanie katalogu ofert turystycznych.
    * Przeglądanie galerii zdjęć.
    * Wysyłanie zapytań przez formularz kontaktowy.
* **Funkcjonalności dla administratora:**
    * Prosty panel wymagający uwierzytelnienia.
    * Podstawowe zarządzanie treścią i przeglądanie zapytań.

## 3. Architektura i Stos Technologiczny (Infrastruktura)

Projekt opiera się na usługach chmury obliczeniowej **Amazon Web Services (AWS)**. Architektura została zaprojektowana zgodnie z dobrymi praktykami Serverless.

* **Warstwa Frontend / Hosting:** `Amazon S3` + `Amazon CloudFront`
    * *Funkcja:* Hosting statycznej strony (np. React/Vue) oraz szybkie dostarczanie treści na świecie dzięki technologii CDN.
    * *Uzasadnienie:* Wysoka dostępność, globalne przyspieszenie ładowania i najniższy koszt hostingu.

* **Warstwa API / Logika Biznesowa:** `Amazon API Gateway` + `AWS Lambda`
    * *Funkcja:* Obsługa żądań API (np. pobieranie ofert, zapisywanie zapytań kontaktowych). Usługa Lambda realizuje kod aplikacji backendowej.
    * *Uzasadnienie:* Pełna architektura bezserwerowa, która automatycznie skaluje się do ogromnej liczby żądań, z płatnością wyłącznie za realny czas wykonywania kodu.

* **Warstwa Bazy Danych:** `Amazon DynamoDB`
    * *Funkcja:* Przechowywanie danych ofert turystycznych i zapytań klientów.
    * *Uzasadnienie:* Bardzo szybka baza typu NoSQL, w całości zarządzana przez AWS (brak konieczności administracji maszynami wirtualnymi), oferująca natywną i niemal nieograniczoną skalowalność.

* **Warstwa Media / Storage:** `Amazon S3`
    * *Funkcja:* Magazyn dla zdjęć, ulotek i innych dużych plików multimedialnych.
    * *Uzasadnienie:* Trwała i bezpieczna pamięć obiektowa, łatwa w integracji z Lambdą oraz CloudFront.

* **Uwierzytelnianie:** `Amazon Cognito`
    * *Funkcja:* System logowania i autoryzacji dla panelu administratora.
    * *Uzasadnienie:* Zarządzany serwis tożsamości zapewniający wysokie bezpieczeństwo i oszczędność czasu przy budowaniu własnego systemu logowania.

* **Wdrażanie (Deployment):** `AWS SAM` (Serverless Application Model)
    * *Funkcja:* Opis i automatyczne wdrażanie całej infrastruktury w chmurze jako kodu (IaC - Infrastructure as Code).
    * *Uzasadnienie:* Branżowy standard i wymagany element w nowoczesnym programowaniu chmurowym. Zapewnia powtarzalność środowisk.

## 4. Zarządzanie Kodem (Struktura Repozytorium)

* Kod źródłowy projektu jest przechowywany w systemie kontroli wersji Git.
* Zachowano ścisły podział na katalogi `frontend/` oraz `backend/`.
* W warstwie backendowej wykorzystano plik `template.yaml` (AWS SAM) jako rdzeń deklaratywnego opisu zasobów chmurowych.