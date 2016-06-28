I18n.translations || (I18n.translations = {});
I18n.translations["pl"] = I18n.extend((I18n.translations["pl"] || {}), {
  "actions": {
    "cancel": "Anuluj",
    "next": "Next",
    "save": "Zapisz",
    "send": "Wyślij"
  },
  "active_admin": {
    "access_denied": {
      "message": "You are not authorized to perform this action."
    },
    "any": "Jakikolwiek",
    "batch_actions": {
      "action_label": "%{title} zaznaczone",
      "button_label": "Akcje na partiach",
      "default_confirmation": "Czy na pewno chcesz to zrobić?",
      "delete_confirmation": "Czy na pewno chcesz usunąć te %{plural_model}?",
      "labels": {
        "destroy": "Usuń"
      },
      "link": "Utwórz jeden",
      "selection_toggle_explanation": "(Przełącz zaznaczenie)",
      "succesfully_destroyed": {
        "few": "Poprawnie usunięto %{count} %{plural_model}",
        "many": "Poprawnie usunięto %{count} %{plural_model}",
        "one": "Poprawnie usunięto 1 %{model}",
        "other": "Poprawnie usunięto %{count} %{plural_model}"
      }
    },
    "blank_slate": {
      "content": "Nie ma jeszcze zasobu %{resource_name}.",
      "link": "Utwórz go"
    },
    "cancel": "Anuluj",
    "clear_filters": "Clear Filters",
    "comments": {
      "add": "Dodaj komentarz",
      "author": "Autor",
      "author_missing": "Anonymous",
      "author_type": "Author Type",
      "body": "Treść",
      "created_at": "Created",
      "delete": "Delete Comment",
      "delete_confirmation": "Are you sure you want to delete these comment?",
      "errors": {
        "empty_text": "Komentarz nie został zapisany, zawartość była pusta."
      },
      "no_comments_yet": "Nie ma jeszcze komentarzy.",
      "resource": "Zasób",
      "resource_type": "Resource Type",
      "title": "Komentarz",
      "title_content": "Komentarze (%{count})"
    },
    "create_model": "New %{model}",
    "dashboard": "Pulpit",
    "dashboard_welcome": {
      "call_to_action": "Aby dodać sekcje do pulpitu, sprawdź 'app/admin/dashboard.rb'",
      "welcome": "Witaj w Active Adminie. To jest domyślny pulpit."
    },
    "delete": "Usuń",
    "delete_confirmation": "Jesteś pewien, że chcesz to usunąć?",
    "delete_model": "Usuń %{model}",
    "details": "Detale %{model}",
    "devise": {
      "change_password": {
        "submit": "Zmień hasło",
        "title": "Zmień hasło"
      },
      "email": {
        "title": "Email"
      },
      "links": {
        "forgot_your_password": "Nie pamiętasz hasła?",
        "resend_confirmation_instructions": "Resend confirmation instructions",
        "resend_unlock_instructions": "Resend unlock instructions",
        "sign_in": "Zaloguj się",
        "sign_in_with_omniauth_provider": "Zaloguj się z %{provider}",
        "sign_up": "Sign up"
      },
      "login": {
        "remember_me": "Zapamiętaj mnie",
        "submit": "Zaloguj się",
        "title": "Logowanie"
      },
      "password": {
        "title": "Password"
      },
      "resend_confirmation_instructions": {
        "submit": "Wyślij ponownie instrukcje aktywacji",
        "title": "Wyślij ponownie instrukcje aktywacji"
      },
      "reset_password": {
        "submit": "Zresetować hasło",
        "title": "Nie pamiętasz hasła?"
      },
      "sign_up": {
        "submit": "Zarejestruj się",
        "title": "Rejestracja"
      },
      "subdomain": {
        "title": "Subdomain"
      },
      "unlock": {
        "submit": "Resend unlock instructions",
        "title": "Resend unlock instructions"
      },
      "username": {
        "title": "Username"
      }
    },
    "download": "Pobierz:",
    "dropdown_actions": {
      "button_label": "Akcje"
    },
    "edit": "Edytuj",
    "edit_model": "Edytuj %{model}",
    "empty": "Pusty",
    "equal_to": "Equal To",
    "filter": "Filter",
    "filters": {
      "buttons": {
        "clear": "Wyczyść Filtry",
        "filter": "Filtruj"
      },
      "predicates": {
        "contains": "Zawiera",
        "ends_with": "Kończy się",
        "equals": "Równe",
        "greater_than": "Większe niż",
        "less_than": "Mniejsze niż",
        "starts_with": "Zaczyna się"
      }
    },
    "greater_than": "Greater Than",
    "has_many_delete": "Usuń",
    "has_many_new": "Dodaj nowy %{model}",
    "has_many_remove": "Usuń",
    "index_list": {
      "block": "List",
      "blog": "Blog",
      "grid": "Grid",
      "table": "Table"
    },
    "less_than": "Less Than",
    "logout": "Wyloguj",
    "main_content": "Zaimplementuj %{model}#main_content aby wyświetlić treść.",
    "new_model": "Nowy %{model}",
    "next": "Następna",
    "pagination": {
      "empty": "Nie znaleziono %{model}",
      "entry": {
        "one": "entry",
        "other": "entries"
      },
      "multiple": "Wyświetlanie %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> z <b>%{total}</b>",
      "multiple_without_total": "Wyświetlanie %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b>",
      "one": "Wyświetlanie <b>1</b> %{model}",
      "one_page": "Wyświetlanie <b>wszystkich %{n}</b> %{model}"
    },
    "powered_by": "Powered by %{active_admin} %{version}",
    "previous": "Poprzednia",
    "search_field": "Search %{field}",
    "search_status": {
      "current_filters": "Current filters:",
      "headline": "Scope:",
      "no_current_filters": "None"
    },
    "sidebars": {
      "filters": "Filtry",
      "search_status": "Search Status"
    },
    "status_tag": {
      "no": "Nie",
      "yes": "Tak"
    },
    "unsupported_browser": {
      "headline": "Please note that ActiveAdmin no longer supports Internet Explorer versions 8 or less.",
      "recommendation": "We recommend upgrading to the latest <a href=\"http://windows.microsoft.com/ie\">Internet Explorer</a>, <a href=\"https://chrome.google.com/\">Google Chrome</a>, or <a href=\"https://mozilla.org/firefox/\">Firefox</a>.",
      "turn_off_compatibility_view": "If you are using IE 9 or later, make sure you <a href=\"http://windows.microsoft.com/en-US/windows7/webpages-look-incorrect-in-Internet-Explorer\">turn off \"Compatibility View\"</a>."
    },
    "update_model": "Edit %{model}",
    "view": "Podgląd"
  },
  "activerecord": {
    "attributes": {
      "poi": {
        "address": "Adres",
        "address_city": "Miasto",
        "address_housenumber": "Numer domu",
        "address_postcode": "Kod pocztowy",
        "address_street": "Ulica",
        "name": "Nazwa",
        "note": "Notatka",
        "phone": "Telefon",
        "type": "Typ",
        "website": "Strona www"
      },
      "user": {
        "first_name": "Imię",
        "last_name": "Nazwisko",
        "privacy_policy": "Privacy policy",
        "terms": "Terms"
      }
    },
    "errors": {
      "full_messages": {
        "format": "%{attribute} %{message}"
      },
      "messages": {
        "accepted": "musi zostać zaakceptowane",
        "blank": "nie może być pusty",
        "confirmation": "nie zgadza się z potwierdzeniem",
        "empty": "nie może być pusty",
        "equal_to": "musi być równe %{count}",
        "even": "musi być parzyste",
        "exclusion": "jest zarezerwowane",
        "greater_than": "musi być większe od %{count}",
        "greater_than_or_equal_to": "musi być większe lub równe %{count}",
        "inclusion": "nie znajduje się na liście dopuszczalnych wartości",
        "invalid": "jest nieprawidłowe",
        "less_than": "musi być mniejsze od %{count}",
        "less_than_or_equal_to": "musi być mniejsze lub równe %{count}",
        "not_a_number": "nie jest liczbą",
        "not_equal_to": "must not be equal to %{count}",
        "odd": "musi być nieparzyste",
        "record_invalid": "Negatywne sprawdzenie poprawności: %{errors}",
        "restrict_dependent_destroy": {
          "many": "Cannot delete record because dependent %{record} exist",
          "one": "Cannot delete record because a dependent %{record} exists"
        },
        "taken": "zostało już zajęte",
        "too_long": "jest za długie (maksymalnie %{count} znaków)",
        "too_short": "jest za krótkie (przynajmniej %{count} znaków)",
        "wrong_length": "ma nieprawidłową długość (powinna wynosić %{count} znaków)"
      },
      "models": {
        "user": {
          "attributes": {
            "email": {
              "blank": "can't be blank if password is given"
            },
            "privacy_policy": {
              "accepted": "must be accepted"
            },
            "terms": {
              "accepted": "must be accepted"
            }
          }
        },
        "user_session": {
          "email": "Adres e-mail",
          "password": "Hasło",
          "remember_me": "Nie wylogowywuj się"
        }
      },
      "template": {
        "body": "Wystąpiły problemy z następującymi polami:",
        "header": {
          "one": "%{model} nie został zachowany z powodu jednego błędu",
          "other": "%{model} nie został zachowany z powodu %{count} błędów"
        }
      }
    },
    "models": {
      "user": "Użytkownik"
    }
  },
  "apipie": {
    "api_documentation": "Dokumentacja API",
    "comments_powered_by_disqus": "komentarze obsługiwane przez %{disqus}",
    "description": "Opis",
    "enable_javascript_html": "Proszę włączyć obsługę JavaScript w celu zobaczenia %{comments_href}.",
    "error_code": "Code",
    "error_description": "Description",
    "error_metadata": "Metadata",
    "errors": "Błędy",
    "examples": "Przykłady",
    "follow_instructions_href": "dalsze instrukcje",
    "follow_instructions_html": "Przejdź do %{href} aby opisać swoje kontrolery.",
    "goto_homepage_href": "%{app_name} Strona główna dokumentacji API",
    "goto_homepage_html": "Spróbuj przejść do %{href}",
    "header_name": "Nazwa nagłówka",
    "headers": "Nagłówki",
    "metadata": "Metadane",
    "method_not_found_html": "Metoda %{method} dla zasobu %{resource} nie została znaleziona.",
    "nil_allowed": "nil dopuszczalny",
    "no_docs_found": "Nie znalezionio dokumentacji",
    "no_docs_found_descr": "Nie znaleziono dokumentacji dla twojego API.",
    "oops": "Ups!!",
    "optional": "opcjonalny",
    "param_name": "Nazwa parametru",
    "params": "Parametry",
    "required": "wymagany",
    "resource": "Zasób",
    "resource_not_found_html": "Zasób %{resource} nie został znaleziony.",
    "resources": "Zasoby",
    "supported_formats": "Dostępne formaty"
  },
  "application": {
    "require_no_user": {
      "notice": "Jesteś już zalogowany ..."
    },
    "require_user": {
      "notice": " Aby zobaczyć te stronę, musisz być zalogowany."
    }
  },
  "breadcrumbs": {
    "node": {
      "create": "Dodaj nowe miejsce",
      "edit": "Edytuj miejsce"
    },
    "root": "Wheelmap"
  },
  "common": {
    "close": "zamknij",
    "skip": "pomiń"
  },
  "date": {
    "abbr_day_names": [
      "nie",
      "pon",
      "wto",
      "śro",
      "czw",
      "pia",
      "sob"
    ],
    "abbr_month_names": [
      "",
      "sty",
      "lut",
      "mar",
      "kwi",
      "maj",
      "cze",
      "lip",
      "sie",
      "wrz",
      "paź",
      "lis",
      "gru"
    ],
    "day_names": [
      "niedziela",
      "poniedziałek",
      "wtorek",
      "środa",
      "czwartek",
      "piątek",
      "sobota"
    ],
    "formats": {
      "default": "%d-%m-%Y",
      "long": "%B %d, %Y",
      "short": "%d %b"
    },
    "month_names": [
      "",
      "styczeń",
      "luty",
      "marzec",
      "kwiecień",
      "maj",
      "czerwiec",
      "lipiec",
      "sierpień",
      "wrzesień",
      "październik",
      "listopad",
      "grudzień"
    ],
    "order": [
      "!ruby/symbol day",
      "!ruby/symbol month",
      "!ruby/symbol year"
    ]
  },
  "datetime": {
    "distance_in_words": {
      "about_x_hours": {
        "one": "około godziny",
        "other": "około %{count} godzin"
      },
      "about_x_months": {
        "one": "około miesiąca",
        "other": "około %{count} miesięcy"
      },
      "about_x_years": {
        "one": "około rok",
        "other": "około %{count} lat"
      },
      "almost_x_years": {
        "one": "almost 1 year",
        "other": "almost %{count} years"
      },
      "half_a_minute": "pół minuty",
      "less_than_x_minutes": {
        "one": "less than a minute",
        "other": "less than %{count} minutes"
      },
      "less_than_x_seconds": {
        "one": "less than 1 second",
        "other": "less than %{count} seconds"
      },
      "over_x_years": {
        "one": "ponad rok",
        "other": "ponad %{count} lat"
      },
      "x_days": {
        "one": "1 dzień",
        "other": "%{count} dni"
      },
      "x_minutes": {
        "one": "1 minuta",
        "other": "%{count} minut"
      },
      "x_months": {
        "one": "1 miesiąc",
        "other": "%{count} miesięcy"
      },
      "x_seconds": {
        "one": "1 sekunda",
        "other": "%{count} sekund"
      }
    },
    "prompts": {
      "day": "Day",
      "hour": "Hour",
      "minute": "Minute",
      "month": "Month",
      "second": "Seconds",
      "year": "Year"
    }
  },
  "devise": {
    "confirmations": {
      "confirmed": "Twój adres email został potwierdzony.",
      "link": "You didn't receive confirmation instructions?",
      "send_instructions": "Za chwilę otrzymasz wiadomość z linkiem do potwierdzenia Twojego adresu email.",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to confirm your account."
    },
    "destroy": {
      "confirm": "Jesteś pewien?",
      "headline": "Delete account",
      "link": "Skasuj teraz"
    },
    "edit": {
      "form": {
        "labels": {
          "current_password": "Aktualne hasło <i>(potrzebujemy go, aby potwierdzić Twoje zmiany)</i>",
          "email": "E-mail",
          "password": "Hasło <i>(zostaw to pole puste, jeśli nie chcesz go zmieniać)</i>",
          "password_confirmation": "Powtórz hasło"
        },
        "submit": "Zapisz zmiany"
      },
      "headline": "Edytuj konto"
    },
    "failure": {
      "already_authenticated": "Jesteś już zalogowany.",
      "inactive": "Your account has not been activated yet.",
      "invalid": "Niepoprawny adres email lub hasło.",
      "invalid_token": "Niepoprawny token.",
      "last_attempt": "You have one more attempt before your account will be locked.",
      "locked": "Twoje konto jest zablokowane.",
      "not_found_in_database": "Invalid email or password.",
      "timeout": "Your session has expired, please sign in again to continue.",
      "unauthenticated": "Aby kontynuować, zaloguj lub zarejestruj się.",
      "unconfirmed": "Aby kontynuować, potwierdź konto."
    },
    "mailer": {
      "confirmation_instructions": {
        "landing_page": "Please click on the link that we just sent to your email address. If you do not receive an email from us, please first check if it is not hiding in your spam folder. If it is not there return to the sign up page and try again.",
        "subject": "Jeszcze tylko jeden krok do aktywacji twojego konta"
      },
      "reset_password_instructions": {
        "subject": "Instrukcja ustawienia nowego hasła"
      },
      "unlock_instructions": {
        "subject": "Unlock instructions"
      }
    },
    "mandatory": "* Wymagane",
    "omniauth_callbacks": {
      "failure": "Autoryzacja przy pomocy %{kind} nie powiodła się. Błąd: \"%{reason}\".",
      "permission_missing": "You did not grant the required permission.",
      "success": "Poprawnie zalogowany z %{kind}."
    },
    "password_recovery": {
      "form": {
        "labels": {
          "email": "E-mail"
        },
        "submit": "Ustaw nowe hasło"
      },
      "headline": "Zapomniałeś hasła?"
    },
    "password_reset": {
      "email": {
        "comment": "Jeżeli nie próbowałeś zmienić hasła, zignoruj ten e-mail.<br/>Twoje hasło nie zostanie zmienione, dopóki nie klikniesz w link powyżej i nie ustawisz nowego hasła.",
        "headline": "Witaj %{email}",
        "link": "Zmień moje hasło",
        "text": "We received a request to change your password. If you sent the request, click the following link - otherwise ignore this!"
      },
      "form": {
        "labels": {
          "password": "Nowe hasło",
          "password_confirmation": "Powtórz hasło"
        },
        "submit": "Ustaw nowe hasło"
      },
      "headline": "Ustaw nowe hasło"
    },
    "passwords": {
      "link": "Zapomniałeś hasła?",
      "no_token": "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
      "send_instructions": "You will receive an email with instructions on how to reset your password in a few minutes",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to reset your password",
      "updated": "Hasło zostało pomyślnie zmienione, jesteś teraz zalogowany.",
      "updated_not_active": "Twoje hasło zostało zmienione"
    },
    "registrations": {
      "destroyed": "Konto zostało usunięte. Mamy nadzieję że wkrótce powrócisz.",
      "inactive_signed_up": "Rejestracja zakończyła się pomyślnie. Nie zostałeś jednak zalogowany z powodu %{reason}.",
      "link": "Zarejestruj się",
      "reasons": {
        "inactive": "nieaktywne",
        "locked": "zablokowane",
        "unconfirmed": "niepotwierdzone"
      },
      "signed_up": "You have signed up successfully. A you have been sent a confirmation email.",
      "signed_up_but_inactive": "You have signed up successfully. However, we could not sign you in because your account is not yet activated.",
      "signed_up_but_locked": "You have signed up successfully. However, we could not sign you in because your account is locked.",
      "signed_up_but_unconfirmed": "A message with a confirmation link has been sent to your email address. Please open the link to activate your account.",
      "update_needs_confirmation": "You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address.",
      "updated": "Konto zostało pomyślnie zaktualizowane."
    },
    "sessions": {
      "inactive": "Your account has not been activated yet",
      "invalid": "Niepoprawny adres e-mail lub hasło",
      "invalid_token": "Nieprawidłowy token autoryzacji",
      "link": "Zaloguj się",
      "locked": "Twoje konto jest zablokowane",
      "new": {
        "no_osm_account": "Nie masz konta w OpenStreetMap?",
        "osm_promo_text": "The Wheelmap is based on geodata from OpenStreetMap (OSM). OpenStreetMap is a free worldwide map, created by people like you. It's like Wikipedia for maps. To be able to edit places or to create new ones you need an OpenStreetMap account and must be logged in with it.",
        "promo_text_thank_you": "Dziękujemy z Twoje wsparcie!",
        "sign_in_with": "Zaloguj się za pomocą %{kind}",
        "sign_up_with_osm": "Zarejestruj się.",
        "wheelmap_promo_text": "With your knowledge about wheelchair accessible places you can help people with physical impairments to plan their daily lives better. Furthermore, this will help make OpenStreetMap more detailed."
      },
      "signed_in": "Zalogowano pomyślnie.",
      "signed_out": "Wylogowano pomyślnie.",
      "timeout": "Your session has expired, please sign in again to continue.",
      "unauthenticated": "Aby kontynuować, zaloguj lub zarejestruj się.",
      "unconfirmed": "Aby kontynuować, potwierdź konto."
    },
    "sign_in": {
      "form": {
        "labels": {
          "email": "E-mail",
          "password": "Hasło",
          "remember_me": "Zapamiętaj mnie"
        },
        "submit": "Zaloguj się"
      },
      "headline": "Zaloguj się"
    },
    "sign_out": {
      "headline": "Wyloguj się"
    },
    "sign_up": {
      "email": {
        "confirm_my_account": "Potwierdź moje konto",
        "please_confirm": "Kliknij w poniższy link aby potwierdzić Twoje konto:",
        "welcome": "Witaj %{email}"
      },
      "form": {
        "labels": {
          "email": "E-mail",
          "password": "Hasło",
          "password_confirmation": "Powtórz hasło",
          "wants_newsletter": "Yes, keep me up to date about Wheelmap - but please not more than once a month."
        },
        "submit": "Zarejestruj się"
      },
      "headline": "Zarejestruj się"
    },
    "unlocks": {
      "link": "You didn't receive unlock instructions?",
      "send_instructions": "You will receive an email in a few minutes with instructions on how to unlock your account",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to unlock your account",
      "unlocked": "Twoje konto zostało odblokowane. Jesteś teraz zalogowany."
    }
  },
  "errors": {
    "dynamic_format": "%{message}",
    "format": "%{attribute} %{message}",
    "messages": {
      "accepted": "must be accepted",
      "already_confirmed": "zostało już potwierdzone",
      "blank": "must be filled in",
      "carrierwave_download_error": "could not be downloaded",
      "carrierwave_integrity_error": "is not of an allowed file type",
      "carrierwave_processing_error": "failed to be processed",
      "confirmation": "nie można potwierdzić",
      "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
      "empty": "must be filled in",
      "equal_to": "musi wynosić dokładnie %{count}",
      "even": "must be an even number",
      "exclusion": "jest zarezerwowany",
      "expired": "utrata ważności, poproś o nowy",
      "extension_black_list_error": "You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}",
      "extension_white_list_error": "You are not allowed to upload %{extension} files, allowed types: %{allowed_types}",
      "greater_than": "musi być większe niż %{count}",
      "greater_than_or_equal_to": "must be greater than or equal to %{count}",
      "inclusion": "wartość nieważna ",
      "invalid": "nieważny",
      "less_than": "musi wynosić mniej niż %{count}",
      "less_than_or_equal_to": "must be less than or equal to %{count}",
      "mime_types_processing_error": "Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}",
      "mini_magick_processing_error": "Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}",
      "not_a_number": "nie jest liczbą",
      "not_an_integer": "musi być liczbą całkowitą",
      "not_found": "nie został odnaleziony",
      "not_locked": "nie został zablokowany",
      "not_saved": {
        "few": "%{count} błędy nie pozwoliły zapisać %{resource}:",
        "one": "błąd nie pozwolił zapisać %{resource}: ",
        "other": "%{count} błędów nie pozwoliło zapisać %{resource}:"
      },
      "odd": "must be an odd number",
      "other_than": "must be other than %{count}",
      "present": "must be blank",
      "rmagick_processing_error": "Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}",
      "taken": "jest już zajęte",
      "too_long": "jest za długie (nie więcej niż %{count} znaków)",
      "too_short": "jest za krótkie (nie mniej niż %{count} znaków)",
      "wrong_length": "niewłaściwa długość (powinno być %{count} znaków)"
    },
    "models": {
      "node": {
        "phone": {
          "invalid": "Numer telefonu jest niepoprawny. Musi on być w następującym formacie: +49 30 234567"
        },
        "website": {
          "invalid": "Adres strony www jest niepoprawny."
        }
      }
    },
    "template": {
      "body": "Nastąpiły problemy z następującymi polami:",
      "header": {
        "few": "Obiekt %{model} nie został zapisany, wystąpiły %{count} błędy",
        "one": "Obiekt %{model} nie został zapisany, wystąpił błąd ",
        "other": "Obiekt %{model} nie został zapisany, wystąpiły %{count} błędy"
      }
    }
  },
  "faq": {
    "answers": {
      "0": "Możesz zawsze zmienić zaznaczenie twoich miejsc. Wybierz tylko prawy przycisk, \n\"zapisz\" i gotowe!",
      "1": "Jako zalogowany użytkownik możesz dodawać / poprawiać informacje o miejscu.\nKliknij \"Zmień\" i dodaj albo popraw.",
      "2": "Możesz dodać dodatkowe informacje (np. \"To miejsce posiada mobilną rampę\") w komentarzach sekcji. Naciśnij \"Edytuj\" i \"dodaj komentarz\""
    },
    "headline": "Czy można napotkać jakieś trudności w tym miejscu?",
    "questions": {
      "0": "To zaznaczenie jest niepoprawne.",
      "1": "Szczegóły miejsca są niepoprawne lub ich brak.",
      "2": "Posiadam więcej informacji o tym miejscu."
    }
  },
  "flash": {
    "actions": {
      "create": {
        "notice": "%{resource_name} został utworzony"
      },
      "destroy": {
        "alert": "%{resource_name} nie mógł zostać usunięty",
        "notice": "%{resource_name} został usunięty"
      },
      "update": {
        "notice": "%{resource_name} został pomyślnie uaktualniony"
      }
    },
    "photos": {
      "destroy": {
        "notice": "Obraz został usunięty"
      }
    }
  },
  "form": {
    "show_fully_accessible_places": "dostępne dla osób na wózkach",
    "show_limited_accessible_places": "Ograniczony dostęp dla wózków",
    "show_places_without_status": "Nieznany status",
    "show_unaccessible_places": "Niedostępne dla osób na wózkach"
  },
  "formtastic": {
    "create": "Utwórz %{model}",
    "hints": {
      "email": "We treat your address confidentially. We promise not to send you spam!",
      "lat": "Przesuń znacznik na mapie w poprawne miejsce",
      "osm_username": "Nie jesteś jeszcze członkiem? <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">Utwórz konto w serwisie Openstreetmap teraz</a>",
      "password": "(zostaw to pole puste, jeśli nie chcesz go zmieniać)",
      "phone": "For example: +49 30 12345678",
      "website": "Na przykład: http://www.example.com"
    },
    "labels": {
      "category": "Kategoria:",
      "centralkey": "Klucz uniwersalny:",
      "city": "Miasto:",
      "create": "Create a place",
      "email": "Email",
      "finish": "Koniec",
      "housenumber": "Nr:",
      "lat": "Szerokość geograficzna",
      "lon": "Długość geograficzna",
      "name": "Nazwisko:",
      "osm_password": "OpenStreetMap password",
      "osm_username": "OpenStreetMap account name",
      "password": "Hasło",
      "password_confirmation": "Powtórz hasło",
      "phone": "Telefon:",
      "postcode": "Kod pocztowy:",
      "privacy_policy": "Akceptuję paragraf 1 i 2 Polityki Ochrony Prywatności",
      "reset": "Resetuj",
      "save": "Zachowaj",
      "street": "Ulica:",
      "terms": "Akceptuję Politykę",
      "type": "Typ:",
      "website": "Strona www:",
      "wheelchair": "Dostępność dla osób na wózkach?",
      "wheelchair_description": "Komentarz dostępności:",
      "wheelchair_toilet": "toalety dostosowane dla niepełnosprawnych na wózku inwalidzkim:"
    },
    "titles": {
      "basic": "Podstawowe dane",
      "optional": "Więcej informacji <span class=\"addition\">(wszystkie pola są nieobowiązkowe)</span>"
    },
    "update": "Aktualizuj %{model}"
  },
  "global": {
    "form_validation_error": "Zobacz listę błędów poniżej."
  },
  "header": {
    "meta": {
      "description": "Wheelmap.org is an online map to search, find and mark wheelchair-accessible places. Get involved by marking public places like bars, restaurants, cinemas or supermarkets!",
      "homepage": "Strona startowa",
      "keywords": "znajdź szukaj zaznacz miejsca dostępne dla osób na wózkach",
      "search": "Szukaj",
      "title": "Wheelmap.org"
    },
    "navigation": {
      "about_wheelmap": "O Wheelmap",
      "blog": "Blog",
      "choose_language": "Wybierz język",
      "contact": "Kontakt",
      "feedback": "Feedback",
      "home": "Start",
      "how_to_add_a_place": "Jak dodać nowe miejsce?",
      "imprint": "Stopka redakcyjna",
      "logged_in_as": "Zalogowany jako:",
      "login": "Zaloguj się",
      "logout": "Wyloguj się",
      "map": "Mapa",
      "newsletter": "Newsletter",
      "press": "Dla mediów",
      "profile": "Profil",
      "projects": "Nasze projekty",
      "suggestions": "Sugestie",
      "what_is_barrier_free": "Co to znaczy \"dostępne dla osób na wózkach\"?",
      "what_is_wheelmap": "What is Wheelmap?"
    },
    "searchbar": {
      "add_place": "Dodaj kolejne miejsce",
      "find": "znajdź",
      "placeholder": "np. Sunset Boulevard L.A. lub Brandenburg Gate Berlin",
      "title_add_place": "Dodaj nowe miejsce dla tej pozycji!"
    },
    "tagline": "Logo wheelmap",
    "title": "Find wheelchair accessible places",
    "toolbar": {
      "categories": "Kategoria"
    }
  },
  "helpers": {
    "page_entries_info": {
      "more_pages": {
        "display_entries": "Wyświetla %{entry_name} <b>%{first}&nbsp;-&nbsp;%{last}</b> z <b>%{total}</b> łącznie"
      },
      "one_page": {
        "display_entries": {
          "few": "Wyświetla <b>wszystkie %{count}</b> %{entry_name}",
          "one": "Wyświetla <b>%{count}</b> %{entry_name}",
          "other": "Wyświetla <b>wszystkie %{count}</b> %{entry_name}",
          "zero": "Nie znaleziono %{entry_name}"
        }
      }
    },
    "select": {
      "prompt": "Wybierz"
    },
    "submit": {
      "create": "stwórz %{model}",
      "submit": "zachowaj %{model}",
      "update": "uaktualnij %{model}"
    }
  },
  "home": {
    "index": {
      "embed_link": "Show on Wheelmap.org",
      "filter": {
        "category": "Wybierz kategorię",
        "deselect_all": "Odznacz wszystko",
        "select_all": "Zaznacz wszystko",
        "wheelchair": "Dostępne dla osób na wózkach?"
      },
      "ie": {
        "action": {
          "ignore": "Ignoruj",
          "upgrade": "Zaktualizuj przegladarkę"
        },
        "warning": {
          "headline": "Przepraszamy!",
          "message": "You appear to be using Internet Explorer. Wheelmap requires a standards compliant browser to work properly. Please consider using Firefox, Chrome, Safari or Opera."
        }
      },
      "link": {
        "node": {
          "create": "Dodaj nowe miejsce"
        }
      },
      "overlay": {
        "button": "Zaczynamy!",
        "categories": "Filtruj miejsca poprzez kategorie",
        "filter": "Filtruj miejsca poprzez dostępność dla poruszających się na wózku inwalidzkim",
        "headline": "Zaznacz i wyszukaj na mapie Wheelmap.org  miejsca przystosowane dla poruszających się na wózku inwalidzkim. To proste:",
        "lookup": "wyszukiwanie poprzez miejsce szczególne",
        "secondary_headline": "Nasz system kolorów opisuje przystosowanie dla poruszających się na wózku inwalidzkim:"
      },
      "popup": {
        "form": {
          "limited": "Ograniczony dostęp dla wózków",
          "no": "Niedostępne dla osób na wózkach",
          "save": "Aktualizuj",
          "unknown": "Nieznany status",
          "yes": "Dostępne"
        },
        "help": "Dostępne dla osób na wózkach? (Pomoc)",
        "more": "więcej ..."
      }
    }
  },
  "how?": "Jak?",
  "landing_pages": {
    "index": {
      "wheelchair": {
        "limit": {
          "headline": "All partially wheelchair accessible %{type} in %{city} (%{count})"
        },
        "no": {
          "headline": "All not wheelchair accessible %{type} in %{city} (%{count})"
        },
        "unknown": {
          "headline": "Wszystkie %{type} w %{city} z nieznanym statusem dostępności dla osób na wózkach (%{count})"
        },
        "yes": {
          "headline": "Wszystkie dostępne dla osób na wózkach %{type} w %{city} (%{count})"
        }
      }
    }
  },
  "layouts": {
    "application": {
      "banner": {
        "alt": "Projekt organizacji Sozialhelden.de"
      }
    }
  },
  "models": {
    "category": {
      "prompt": "Wybierz kategorię"
    },
    "node": {
      "info_edit_position": "Miejsce pojawi się na Wheelmap tak jak powyżej. Jeśli znacznik nie jest umieszczony w poprawnym miejscu, możesz <a href=\"%{url}\">zmienić jego pozycję na OpenStreetMap.</a>",
      "mail": {
        "body": "(Proszę użyj jedynie języka angielskiego lub niemieckiego)\n\nHi Sozialhelden,\nsomething is wrong with location: %{url}\n\nThe problem is:",
        "subject": "[Wheelmap] Problem z %{headline}"
      }
    },
    "node_type": {
      "prompt": "Wybierz typ"
    }
  },
  "node": {
    "address": {
      "city": "%{city} %{postcode}",
      "street": "%{housenumber} %{street}"
    },
    "tags": {
      "phone": "Telefon:",
      "website": "Strona internetowa:"
    }
  },
  "nodes": {
    "create": {
      "flash": {
        "not_successfull": "Ups, Twój wpis był niepoprawny lub niekompletny.",
        "successfull": "Dziękujemy, wpis został poprawnie dodany i wkrótce pojawi się na stronie"
      }
    },
    "edit": {
      "header": {
        "title": "Edytuj miejsce: %{node} | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Anuluj"
      }
    },
    "errors": {
      "default": "Oops something went wrong. We have been informed about this issue",
      "not_authorized": "Przepraszamy, autoryzacja nie powiodła się",
      "not_available": "Przepraszamy, strona jest chwilowo niedostępna",
      "not_existent": "Przepraszamy, to miejsce nie jest już dostępne.",
      "not_found": "Przepraszamy, strona nie została znaleziona",
      "param_missing": "Proszę wpisać szukane słowo."
    },
    "flash": {
      "authorize_wheelmap": "Aby edytować dane, potrzebujesz konta w serwisie OpenStreetMap"
    },
    "new": {
      "form": {
        "legend": "lokalizacja miejsca",
        "location": "Kliknij miejsce na mapie aby zaznaczyć pozycję",
        "section": {
          "accessibility": {
            "name": "Wheelchair accessibility",
            "title": "Information on wheelchair accessibility"
          },
          "address": {
            "help": "You can move the marker to the correct location on the map.",
            "name": "Address",
            "title": "Where is the place?"
          },
          "contact": {
            "name": "Contact",
            "title": "Other contact information"
          },
          "name_category": {
            "name": "Name and category",
            "title": "Give us some initial information about your place:"
          },
          "overview": {
            "title": "Is all the information correct?"
          },
          "similar_nodes": {
            "empty": "No similar places were found.",
            "go_edit": "Continue with this place",
            "go_new": "It is none of the places above …",
            "name": "Similar places",
            "title": "We found similar places nearby. Is it one of these?"
          }
        },
        "title": "Add a place"
      },
      "header": {
        "title": "Nowe miejsce | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Anuluj"
      }
    },
    "node": {
      "link": {
        "claim": "Pracujesz tutaj?",
        "edit_node": "Edytuj miejsce",
        "report_bug": "Zgłoś problem"
      }
    },
    "node_data": {
      "address": "Adres:",
      "contact_details": "Dane kontaktowe:"
    },
    "node_edit": {
      "details": "Szczegóły",
      "edit": "Zmień"
    },
    "node_map": {
      "map": "Mapa:"
    },
    "node_note": {
      "comment": "Komentarze:"
    },
    "node_photos": {
      "add": "Dodaj",
      "photos_of_this_place": "Obrazy dla tego miejsca",
      "upload": "Załaduj"
    },
    "node_similar": {
      "similar": "podobne miejsca: %{name}"
    },
    "node_status": {
      "accessible_toilet": "toalety dostosowane dla niepełnosprawnych na wózku inwalidzkim:",
      "premium": "%{name} mówi: to miejsce jest",
      "wheelchair_accessibility": "dostępność dla poruszających się na wózku inwalidzkim:"
    },
    "node_streetview": {
      "streetview": "Widok ulicy:"
    },
    "show": {
      "header": {
        "meta": {
          "description": "Sprawdź na mapie Wheelmap.org czy to miejsce jest przystosowane dla poruszających się na wózku inwalidzkim albo dodaj inne informacje lub obrazy.",
          "title": "To miejsce znajduje się na mapie Wheelmap.org: %{name}"
        },
        "title": "Miejsce: %{node} | wheelmap.org"
      },
      "link": {
        "back": "wróć",
        "large_map": "Powiększ",
        "listing": "Wszystkie miejsca typu '%{type}' w %{city}",
        "upload": "Dodaj obraz"
      },
      "more_data_from": "There is more information about this place, validated by:",
      "share": {
        "email": "Email",
        "facebook": "Facebook",
        "text": "I found this place on Wheelmap.org: %{name}",
        "twitter": "Twitter"
      },
      "show-in-osm": "OpenStreetMap"
    },
    "update": {
      "flash": {
        "not_successfull": "Ups, Twój wpis był niepoprawny lub niekompletny.",
        "successfull": "Dziękujemy, wpis został poprawnie dodany i wkrótce pojawi się na stronie"
      }
    },
    "update_wheelchair": {
      "successfull": "Status dla miejsca \"%{name}\" zmienił się na \"%{status} dostępny dla osób na wózkach\" i wkrótce będzie widoczny."
    }
  },
  "number": {
    "currency": {
      "format": {
        "delimiter": " ,",
        "format": "%u %n",
        "precision": 2,
        "separator": ".",
        "significant": false,
        "strip_insignificant_zeros": false,
        "unit": "PLN"
      }
    },
    "format": {
      "delimiter": ",",
      "precision": 3,
      "separator": ".",
      "significant": false,
      "strip_insignificant_zeros": false
    },
    "human": {
      "decimal_units": {
        "format": "%n %u",
        "units": {
          "billion": "Miliard",
          "million": "Milion",
          "quadrillion": "Kwadrylion",
          "thousand": "Tysiąc",
          "trillion": "Trylion",
          "unit": ""
        }
      },
      "format": {
        "delimiter": "",
        "precision": 3,
        "significant": true,
        "strip_insignificant_zeros": true
      },
      "storage_units": {
        "format": "%n %u",
        "units": {
          "byte": {
            "few": "bajtów",
            "one": "bajt",
            "other": "bajtów"
          },
          "gb": "GB",
          "kb": "KB",
          "mb": "MB",
          "tb": "TB"
        }
      }
    },
    "percentage": {
      "format": {
        "delimiter": "",
        "format": "%n%"
      }
    },
    "precision": {
      "format": {
        "delimiter": ""
      }
    }
  },
  "oauth": {
    "application": {
      "connect": {
        "headline": "You need to connect your account with your OpenStreetMap account before you can create or modify places on Wheelmap.org."
      }
    },
    "callback": {
      "notice": "Your Wheelmap account is now connected to the OpenStreetMap account %{user}."
    }
  },
  "or": "lub",
  "place": {
    "few": "%{count} miejsc",
    "one": "%{count} miejsce",
    "other": "%{count} miejsc"
  },
  "poi": {
    "category": {
      "accommodation": "Zakwaterowanie",
      "education": "Edukacja",
      "food": "Jedzenie",
      "government": "Urzędy",
      "health": "Szpital lub przychodnia",
      "leisure": "Czas wolny",
      "misc": "Różne",
      "money_post": "Bank / Post office",
      "public_transfer": "Public transport",
      "shopping": "Zakupy",
      "sport": "Sport",
      "tourism": "Turystyka",
      "unknown": "Nieznany"
    },
    "name": {
      "accommodation": {
        "beach_resort": "Hotel na plaży",
        "bed_and_breakfast": "Bed and breakfast",
        "camp_site": "Pole kempingowe",
        "caravan_site": "Kemping",
        "chalet": "Domek wypoczynkowy",
        "dormitory": "Akademik",
        "guest_house": "Pensjonat",
        "hostel": "Hostel",
        "hotel": "Hotel",
        "motel": "Motel"
      },
      "education": {
        "college": "Szkoła wyższa",
        "driving_school": "Szkoła Nauki Jazdy",
        "kindergarten": "Przedszkole",
        "library": "Biblioteka",
        "museum": "Muzeum",
        "school": "Szkoła",
        "university": "Uniwersytet"
      },
      "food": {
        "bar": "Bar",
        "biergarten": "Ogródek piwny",
        "cafe": "Kawiarnia",
        "drinking_water": "Ujęcie wody pitnej",
        "fast_food": "Fast food",
        "ice_cream": "Lodziarnia",
        "pub": "Pub",
        "restaurant": "Restauracja"
      },
      "government": {
        "courthouse": "Sąd",
        "embassy": "Ambasada",
        "government": "Agencja rządowa",
        "police": "Policja",
        "public_building": "Budynek użyteczności publicznej",
        "townhall": "Town hall"
      },
      "health": {
        "dentist": "Stomatolog",
        "doctors": "Doctor",
        "hearing_aids": "Sklep z aparatami słuchowymi",
        "hospital": "Szpital",
        "medical_supply": "Zaopatrzenie medyczne",
        "pharmacy": "Apteka",
        "social_facility": "Infrastruktura społeczna",
        "veterinary": "Weterynarz"
      },
      "leisure": {
        "arena": "Hala sportowa",
        "brothel": "Agencja towarzyska",
        "casino": "Kasyno",
        "cinema": "Kino",
        "community_centre": "Community centre",
        "gallery": "Galeria",
        "nightclub": "Klub nocny",
        "playground": "Plac zabaw",
        "sauna": "Sauna",
        "stripclub": "Klub nocny ze striptizem",
        "theatre": "Teatr",
        "zoo": "Zoo"
      },
      "misc": {
        "company": "Firma (Biuro)",
        "estate_agent": "Biuro Nieruchomości",
        "insurance": "Agencja ubezpieczeniowa",
        "lawyer": "Kancelaria prawna",
        "place_of_worship": "Miejsce kultu",
        "toilets": "Toaleta"
      },
      "money_post": {
        "atm": "Bankomat",
        "bank": "Bank",
        "bureau_de_change": "Kantor wymiany walut",
        "post_box": "Skrzynka pocztowa",
        "post_office": "Poczta"
      },
      "public_transfer": {
        "aerodrome": "Lotnisko",
        "bicycle_parking": "Parking dla rowerów",
        "bicycle_rental": "Wypożyczalnia rowerów",
        "boatyard": "Boat yard",
        "bus_station": "Dworzec autobusowy",
        "bus_stop": "Przystanek autobusowy",
        "cable_car": "Kolejka linowa",
        "car_rental": "Wypożyczalnia samochodów",
        "car_sharing": "Car sharing",
        "chair_lift": "Wyciąg krzesełkowy",
        "ferry": "Prom",
        "ferry_terminal": "Terminal promowy",
        "fuel": "Stacja paliw",
        "halt": "Przystanek",
        "light_rail": "Pociąg podmiejski",
        "parking": "Parking",
        "parking_aisle": "Przejście na parkingu",
        "platform": "Peron",
        "station": "Metro",
        "subway_entrance": "Wejście do metra",
        "terminal": "Terminal lotniska",
        "tram_stop": "Przystanek tramwajowy"
      },
      "shopping": {
        "alcohol": "Sklep monopolowy",
        "bakery": "Piekarnia",
        "beauty": "Kosmetyczka",
        "beverages": "Sklep z napojami",
        "bicycle": "Sklep rowerowy",
        "books": "Księgarnia",
        "butcher": "Rzeźnik",
        "car_repair": "Warsztat samochodowy",
        "car_shop": "Salon samochodowy",
        "chemist": "Chemist / Drugstore",
        "clothes": "Sklep z ubraniami",
        "computer": "Komputer",
        "confectionery": "Cukiernia",
        "convenience": "Sklep",
        "deli": "Delikatesy",
        "department_store": "Dom towarowy",
        "doityourself": "Zrób to sam",
        "dry_cleaning": "Pralnia chemiczna",
        "electronics": "Sklep ze sprzętem RTV",
        "fabric": "Sklep z tkaninami",
        "farm_shop": "Żywność ekologiczna",
        "florist": "Kwiaciarnia",
        "furniture": "Sklep z meblami",
        "garden_centre": "Garden centre",
        "gift": "Sklep z prezentami",
        "hairdresser": "Fryzjer",
        "hardware": "Hardware",
        "jewelry": "Jubiler",
        "kiosk": "Kiosk",
        "laundry": "Pralnia",
        "mall": "Centrum handlowe",
        "optician": "Optyk",
        "organic": "Sklep z artykułami organicznymi",
        "outdoor": "Sklep z odzieżą sportową ",
        "pet": "Sklep zoologiczny",
        "photo": "Zdjęcie",
        "second_hand": "Sklep z używaną odzieżą",
        "shoes": "Sklep z obuwiem",
        "sports": "Sport",
        "stationery": "Sklep z artykułami biurowymi",
        "supermarket": "Supermarket",
        "toys": "Zabawki",
        "travel_agency": "Biuro podróży",
        "video": "Wypożyczalnia video / płyt DVD"
      },
      "sport": {
        "pitch": "boisko sportowe",
        "sports_centre": "Ośrodek sportowy",
        "stadium": "Stadion",
        "swimming": "Kąpielisko",
        "swimming_pool": "Basen"
      },
      "tourism": {
        "archaeological_site": "Stanowisko archeologiczne",
        "arts_centre": "Centrum kultury",
        "artwork": "Dzieło sztuki",
        "attraction": "Atrakcja",
        "battlefield": "Pole bitwy",
        "beach": "Plaża",
        "beacon": "Latarnia morska",
        "castle": "Zamek",
        "cave_entrance": "Wejście do jaskini",
        "information": "Informacja turystyczna",
        "memorial": "Pomnik",
        "theme_park": "Park rozrywki",
        "tower": "Wieża",
        "viewpoint": "Punkt widokowy"
      },
      "unknown": {
        "unknown": "Nieznany"
      }
    }
  },
  "profile": {
    "edit": {
      "application": {
        "oauth": {
          "connected": "Stan: połączony",
          "grant": "Połącz się",
          "not_connected": "Status: nie połączony",
          "revoke": "Rozłącz"
        }
      },
      "headline": "Edytuj profil"
    }
  },
  "ransack": {
    "all": "all",
    "and": "and",
    "any": "any",
    "asc": "ascending",
    "attribute": "attribute",
    "combinator": "combinator",
    "condition": "condition",
    "desc": "descending",
    "or": "or",
    "predicate": "predicate",
    "predicates": {
      "blank": "is blank",
      "cont": "contains",
      "cont_all": "contains all",
      "cont_any": "contains any",
      "does_not_match": "doesn't match",
      "does_not_match_all": "doesn't match all",
      "does_not_match_any": "doesn't match any",
      "end": "ends with",
      "end_all": "ends with all",
      "end_any": "ends with any",
      "eq": "equals",
      "eq_all": "equals all",
      "eq_any": "equals any",
      "false": "is false",
      "gt": "greater than",
      "gt_all": "greater than all",
      "gt_any": "greater than any",
      "gteq": "greater than or equal to",
      "gteq_all": "greater than or equal to all",
      "gteq_any": "greater than or equal to any",
      "in": "in",
      "in_all": "in all",
      "in_any": "in any",
      "lt": "less than",
      "lt_all": "less than all",
      "lt_any": "less than any",
      "lteq": "less than or equal to",
      "lteq_all": "less than or equal to all",
      "lteq_any": "less than or equal to any",
      "matches": "matches",
      "matches_all": "matches all",
      "matches_any": "matches any",
      "not_cont": "doesn't contain",
      "not_cont_all": "doesn't contain all",
      "not_cont_any": "doesn't contain any",
      "not_end": "doesn't end with",
      "not_end_all": "doesn't end with all",
      "not_end_any": "doesn't end with any",
      "not_eq": "not equal to",
      "not_eq_all": "not equal to all",
      "not_eq_any": "not equal to any",
      "not_in": "not in",
      "not_in_all": "not in all",
      "not_in_any": "not in any",
      "not_null": "is not null",
      "not_start": "doesn't start with",
      "not_start_all": "doesn't start with all",
      "not_start_any": "doesn't start with any",
      "null": "is null",
      "present": "is present",
      "start": "starts with",
      "start_all": "starts with all",
      "start_any": "starts with any",
      "true": "is true"
    },
    "search": "search",
    "sort": "sort",
    "value": "value"
  },
  "search": {
    "index": {
      "no-results": {
        "headline": "Przykro nam, nie mogliśmy znaleźć \"%{query}\".",
        "hint": {
          "example": "<strong>przykład:</strong> London, United Kingdom",
          "info": "Nasza wyszukiwarka wyszukuje miejsca poprzez nazwę lub dane adresowe. \nWpisz proszę nazwę wyszukiwanego miejsca lub adres np. nazwę ulicy albo miasta.\nWyszukiwanie poprzez kategorie t.j. restauracje albo kina jest niemożliwe!",
          "work_in_progress": "Pracujemy nad tym aby ulepszyć wyszukiwanie miejsc i uczynić je bardziej intuicyjnym."
        },
        "try_this": {
          "address": "Proszę wprowadź więcej <strong>danych adresowych</strong>.",
          "intro": "Spróbuj tak:",
          "spell_check": "Sprawdź <strong>poprawność literowania</strong> twojego wpisu"
        }
      },
      "results": {
        "ticker": {
          "few": "%{count} wyników:",
          "one": "%{count} wynik:",
          "other": "%{count} wyników:"
        }
      },
      "search": {
        "for": "Szukam \"%{q}\"",
        "not_found": "Nie można znaleźć miejsca!"
      }
    },
    "timeout": {
      "headline": "Sorry, something went wrong",
      "info": "Usługa wyszukiwania była tymczasowo niedostępna",
      "repeat_search": "ponów wyszukiwanie"
    }
  },
  "splash": {
    "countline": "%{count} miejsc zostało już oznaczonych.",
    "headline": "Każdy może dodawać miejsca dostępne dla osób na wózkach!",
    "start": "Start",
    "step1": "Kliknij miejsce, które znasz",
    "step2": "Zaznacz i kliknij \"zachowaj\"",
    "step3": "Rejestracja nie jest potrzebna.",
    "what_is_wheelmap": "What is Wheelmap?"
  },
  "statistics": "Statystyki",
  "support": {
    "array": {
      "last_word_connector": " oraz ",
      "sentence_connector": "i",
      "two_words_connector": " i ",
      "words_connector": ", "
    },
    "select": {
      "prompt": "Proszę wybrać"
    }
  },
  "time": {
    "am": "przed południem",
    "formats": {
      "default": "%a, %d %b %Y %H:%M:%S %z",
      "long": "%B %d, %Y %H:%M",
      "short": "%d %b %H:%M"
    },
    "pm": "po południu"
  },
  "toiletstatus": {
    "no": "No wheelchair accessible toilet",
    "unknown": "Toilet status unknown",
    "what_is": {
      "no": "Doorways' inner width min. 90 cm (35 in), clear floor space min. 150 x 150 cm (59 x 59 in), wheelchair-height toilet seat, folding grab rails and accessible hand basin.",
      "unknown": "Help out by marking the toilet status!",
      "yes": "Doorways' inner width min. 90 cm (35 inc), clear floor space min. 150 x 150 cm (59 x 59), wheelchair-height toilet seat, folding grab rails and accessible hand basin."
    },
    "yes": "Wheelchair accessible toilet"
  },
  "user_sessions": {
    "create": {
      "activation": {
        "notice": "Twoje konto jest już aktywne!"
      },
      "error": {
        "notice": "E-mail i hasło nie pasują do siebie."
      },
      "notice": "Jesteś zalogowany!"
    },
    "destroy": {
      "notice": "Do zobaczenia, wróć tutaj wkrótce!"
    },
    "new": {
      "email": "Email address",
      "login": "Zaloguj się",
      "login_with_twitter": "Zaloguj się kontem z Twittera",
      "password": "Hasło",
      "remember_me": "Nie wylogowywuj się"
    }
  },
  "users": {
    "after_signup_edit": {
      "welcome": {
        "headline": "You are almost there! Now on to finalize your Wheelmap account:",
        "set_password_for_mobile": "You have successfully registered with OpenStreetMap. Please choose an email address that you would like Wheelmap to use so we can keep you informed about your activities (for example the number of places you have marked). You can access this information on your \"Profile\".",
        "text": "Jak możemy się z Tobą skontaktować? Tę informację będziesz mógł później edytować."
      }
    },
    "edit": {
      "headline": {
        "your_images": "twoje załadowane obrazy"
      }
    },
    "profile": {
      "edit": {
        "legends": {
          "user_data": "Your account information"
        },
        "title": "Profil"
      },
      "newsletter": {
        "label": "Yes, keep me updated about Wheelmap.",
        "text": "Stay up to date with the Wheelmap newsletter. Don't worry, we won't spam you. You'll hear from us once a month at most.",
        "title": "Newsletter"
      },
      "photos": {
        "empty": "You haven't uploaded any photos yet.",
        "title": "Zdjęcia"
      },
      "show": {
        "greeting": {
          "anonymously": "Hello there",
          "personalized": "Hello %{name}"
        },
        "overview": {
          "photos_uploaded": {
            "one": "uploaded %{count} photo",
            "other": "uploaded %{count} photos"
          },
          "pois_added": {
            "one": "added %{count} place",
            "other": "added %{count} places"
          },
          "pois_edited": {
            "one": "edited %{count} place",
            "other": "edited %{count} places"
          },
          "pois_marked": {
            "one": "marked %{count} place",
            "other": "marked %{count} places"
          },
          "text": "You have"
        },
        "text_html": "Hello there,<br>\nWelcome (back) to Wheelmap.org! We’re happy to have you on board! You can browse our <a href=\"http://wheelmap.org/en/blog-2/\">Blog</a> or <a href=\"http://wheelmap.org/en/faqs/\">FAQs</a> if you want to get to know Wheelmap.org a bit better. Or you can learn more about the <a href=\"http://wheelmap.org/en/get-engaged/\">projects</a> we offer around Wheelmap.org and how you can get involved.<br>\nKeep in touch<br>\nTo stay in contact you can subscribe to our monthly newsletter and follow us on <a href=\"https://www.facebook.com/wheelmap\">Facebook</a> and <a href=\"https://twitter.com/wheelmap\">Twitter</a>. We’re looking forward to hearing your opinion and starting a conversation with you!<br>\nAnd now, happy mapping!<br>\nYour Wheelmap team",
        "title": "Overview"
      },
      "widget": {
        "categories": "Show category filter",
        "center": "Map area",
        "empty_center": "Search for center of map …",
        "empty_provider": "Choose a Provider",
        "height": "Height",
        "legends": {
          "embed": "Embed code",
          "embed_explanation": "You can change the specifications for latitude (<code>lat</code>), longitude (<code>lon</code>) and zoom level (<code>zoom</code>) in the code above manually and thereby adjust the map segment (widget) according to the location you want to show.",
          "general": "Create your own Wheelmap widget and embed it in your website or blog.",
          "preview": "Preview",
          "settings": "Ustawienia"
        },
        "providers": "Provider",
        "title": "Widget",
        "width": "Width"
      }
    }
  },
  "views": {
    "pagination": {
      "first": "&laquo; Pierwsza",
      "last": "Ostatnia &raquo;",
      "next": "Dalej &rsaquo;",
      "previous": "&lsaquo; Wstecz",
      "truncate": "&hellip;"
    }
  },
  "wheelchairstatus": {
    "limited": "Ograniczony dostęp dla wózków",
    "no": "Niedostępne dla osób na wózkach",
    "unknown": "Nieznany status",
    "yes": "Dostępne"
  },
  "wheelmap": {
    "footer": {
      "a_project_of": "Projekt przygotowany przez",
      "based_on": "Projekt oparty na",
      "become_a_supporter": "Zostań zwolennikiem",
      "main_supporter": "Główny sponsor"
    },
    "itunes": {
      "alt": "Logo AppStore",
      "title": "Ściągnij teraz aplikację na iPhone'a!"
    },
    "logo": {
      "alt": "Logo wheelmap - znajdź miejsca dostępne dla osób na wózkach",
      "title": "Wheelmap - znajdź miejsca dostępne dla osób na wózkach"
    },
    "what_is": {
      "fully_accessible": "Wejście bez schodów, wszystkie pomieszczenia bez schodów.",
      "limited_accessible": "Przy wejściu jest jeden schodek o wysokości maks. 7 cm (3 in), w większości pomieszczeń nie ma schodów.",
      "not_accessible": "Przy wejściu jest schodek lub kilka schodków, pomieszczenia nie są przystosowane.",
      "unknown_accessible": "Pomóż nam zaznaczając miejsca!"
    }
  },
  "will_paginate": {
    "next_label": "Następny &#8594;",
    "page_entries_info": {
      "multi_page": "Wyświetl %{model} %{from} - %{to} of %{count} ogółem",
      "multi_page_html": "Wyświetl %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> of <b>%{count}</b> ogółem",
      "single_page": {
        "one": "Wyświetlanie 1 %{model}",
        "other": "Wyświetl wszystkie %{count} %{model}",
        "zero": "%{model} nie odnaleziony"
      },
      "single_page_html": {
        "one": "Wyświetl <b>1</b> %{model}",
        "other": "Wyświetlanie <b>all&nbsp;%{count}</b> %{model}",
        "zero": "Nie odnaleziono %{model} "
      }
    },
    "page_gap": "&hellip;",
    "previous_label": "&#8592; Poprzedni"
  }
});
