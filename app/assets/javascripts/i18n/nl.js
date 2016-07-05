I18n.translations || (I18n.translations = {});
I18n.translations["nl"] = I18n.extend((I18n.translations["nl"] || {}), {
  "actions": {
    "cancel": "Annuleren",
    "next": "Next",
    "save": "Opslaan",
    "send": "Verzenden"
  },
  "active_admin": {
    "access_denied": {
      "message": "U bent niet gemachtigd voor deze actie."
    },
    "any": "Alle",
    "batch_actions": {
      "action_label": "%{title} geselecteerde",
      "button_label": "Batch acties",
      "default_confirmation": "Weet u zeker dat u dit wilt doen?",
      "delete_confirmation": "Weet u zeker dat u deze %{plural_model} wilt verwijderen?",
      "labels": {
        "destroy": "Verwijder"
      },
      "link": "Maak aan",
      "selection_toggle_explanation": "(Toggle selectie)",
      "succesfully_destroyed": {
        "one": "1 %{model} verwijderd.",
        "other": "%{count} %{plural_model} verwijderd."
      }
    },
    "blank_slate": {
      "content": "Er zijn geen %{resource_name} gevonden.",
      "link": "Maak aan"
    },
    "cancel": "Annuleren",
    "clear_filters": "Clear Filters",
    "comments": {
      "add": "Voeg commentaar toe",
      "author": "Auteur",
      "author_missing": "Anoniem",
      "author_type": "Auteur Type",
      "body": "Tekst",
      "created_at": "Aangemaakt op",
      "delete": "Verwijder commentaar",
      "delete_confirmation": "Weet u zeker dat u dit commentaar wilt verwijderen?",
      "errors": {
        "empty_text": "De reactie is niet opgeslagen, de tekst was leeg."
      },
      "no_comments_yet": "Nog geen reacties.",
      "resource": "Resource",
      "resource_type": "Resource Type",
      "title": "Reactie",
      "title_content": "Reacties (%{count})"
    },
    "create_model": "New %{model}",
    "dashboard": "Dashboard",
    "dashboard_welcome": {
      "call_to_action": "Pas uw eigen dashboard aan in het bestand 'app/admin/dashboard.rb'",
      "welcome": "Welkom bij Active Admin. Dit is de standaard dashboard pagina"
    },
    "delete": "Verwijder",
    "delete_confirmation": "Weet u zeker dat je dit item wilt verwijderen?",
    "delete_model": "Verwijder %{model}",
    "details": "%{model} details",
    "devise": {
      "change_password": {
        "submit": "Mijn wachtwoord wijzigen",
        "title": "Wijzig uw wachtwoord"
      },
      "email": {
        "title": "Email"
      },
      "links": {
        "forgot_your_password": "Wachtwoord vergeten?",
        "resend_confirmation_instructions": "Bevestigingsinstructies opnieuw versturen",
        "resend_unlock_instructions": "Ontgrendelinstructies opnieuw versturen",
        "sign_in": "Meld u aan",
        "sign_in_with_omniauth_provider": "Log in met %{provider}",
        "sign_up": "Registreren"
      },
      "login": {
        "remember_me": "Onthoud mij",
        "submit": "inloggen",
        "title": "inloggen"
      },
      "password": {
        "title": "Wachtwoord"
      },
      "resend_confirmation_instructions": {
        "submit": "Verstuur bevestigingsinstructies opnieuw",
        "title": "Verstuur bevestigingsinstructies opnieuw"
      },
      "reset_password": {
        "submit": "Reset mijn wachtwoord vergeten",
        "title": "Wachtwoord vergeten?"
      },
      "sign_up": {
        "submit": "Registreren",
        "title": "Registreren"
      },
      "subdomain": {
        "title": "Subdomein"
      },
      "unlock": {
        "submit": "Verstuur ontgrendelinstructies opnieuw",
        "title": "Verstuur ontgrendelinstructies opnieuw"
      },
      "username": {
        "title": "Gebruikersnaam"
      }
    },
    "download": "Download",
    "dropdown_actions": {
      "button_label": "Acties"
    },
    "edit": "Wijzig",
    "edit_model": "Wijzig %{model}",
    "empty": "Leeg",
    "equal_to": "Equal To",
    "filter": "Filter",
    "filters": {
      "buttons": {
        "clear": "Maak Filters Ongedaan",
        "filter": "Filter"
      },
      "predicates": {
        "contains": "Bevat",
        "ends_with": "Eindigt op",
        "equals": "Gelijk aan",
        "greater_than": "Groter dan",
        "less_than": "Kleiner dan",
        "starts_with": "Begint met"
      }
    },
    "greater_than": "Greater Than",
    "has_many_delete": "Verwijderen",
    "has_many_new": "Voeg nieuwe %{model} toe",
    "has_many_remove": "Verwijderen",
    "index_list": {
      "block": "Lijst",
      "blog": "Blog",
      "grid": "Rooster",
      "table": "Tabel"
    },
    "less_than": "Less Than",
    "logout": "Uitloggen",
    "main_content": "Implementeer %{model}#main_content om de content weer te geven.",
    "new_model": "Nieuwe %{model}",
    "next": "Volgende",
    "pagination": {
      "empty": "Geen %{model} gevonden",
      "entry": {
        "one": "entry",
        "other": "entries"
      },
      "multiple": "Geeft %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> van de <b>%{total}</b> weer",
      "multiple_without_total": "Geeft %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b>",
      "one": "Geeft <b>1</b> %{model} weer",
      "one_page": "Geeft <b>%{n}</b> %{model} weer"
    },
    "powered_by": "Mogelijk gemaakt door %{active_admin} %{version}",
    "previous": "Vorige",
    "search_field": "Search %{field}",
    "search_status": {
      "current_filters": "Huidige filters:",
      "headline": "Scope:",
      "no_current_filters": "Geen"
    },
    "sidebars": {
      "filters": "Filters",
      "search_status": "Search Status"
    },
    "status_tag": {
      "no": "Geen",
      "yes": "Ja"
    },
    "unsupported_browser": {
      "headline": "Opgelet, ActiveAdmin bied geen support meer voor Internet Explorer 8 of lager",
      "recommendation": "Wij raden aan om te upgraden naar de nieuwste <a href=\"http://windows.microsoft.com/ie\">Internet Explorer</a>, <a href=\"https://chrome.google.com/\">Google Chrome</a>, of <a href=\"https://mozilla.org/firefox/\">Firefox</a>.",
      "turn_off_compatibility_view": "Als u IE 9 of nieuwer gebruikt, zorg ervoor dat u <a href=\"http://windows.microsoft.com/en-US/windows7/webpages-look-incorrect-in-Internet-Explorer\"> \"Compatibility View\" uit zet</a>."
    },
    "update_model": "Edit %{model}",
    "view": "Bekijk"
  },
  "activerecord": {
    "attributes": {
      "poi": {
        "address": "Adres",
        "address_city": "Stad",
        "address_housenumber": "Huisnummer",
        "address_postcode": "Postcode",
        "address_street": "Straat",
        "name": "Naam",
        "note": "Note",
        "phone": "Telefoon",
        "type": "Type",
        "website": "Website"
      },
      "user": {
        "first_name": "Geboortenaam",
        "last_name": "Achternaam",
        "privacy_policy": "Privacy policy / Voorwaarden",
        "terms": "Termen"
      }
    },
    "errors": {
      "full_messages": {
        "format": "%{attribute} %{message}"
      },
      "messages": {
        "accepted": "moet geaccepteerd worden",
        "blank": "Kan niet leeg zijn",
        "confirmation": "bevestiging past niet",
        "empty": "kan niet leeg zijn",
        "equal_to": "Moet gelijk zijn met %{count}",
        "even": "Moet gelijk zijn",
        "exclusion": "is gereserveerd",
        "greater_than": "moet groter zijn dan %{count}",
        "greater_than_or_equal_to": "moet groter zijn of gelijk met %{count}",
        "inclusion": "is niet inbegrepen in de lijst",
        "invalid": "is ongeldig",
        "less_than": "moet minder zijn dan %{count}",
        "less_than_or_equal_to": "moet minder dan of gelijk zijn met %{count}",
        "not_a_number": "is geen nummer",
        "not_equal_to": "must not be equal to %{count}",
        "odd": "moet apart zijn",
        "record_invalid": "Controle faalde: %{errors}",
        "restrict_dependent_destroy": {
          "many": "Cannot delete record because dependent %{record} exist",
          "one": "Cannot delete record because a dependent %{record} exists"
        },
        "taken": "wordt al gebruikt",
        "too_long": "is te lang (maximum is %{count} characters)",
        "too_short": "is te kort (minimum is %{count} characters)",
        "wrong_length": "lengte is fout (should be %{count} characters)"
      },
      "models": {
        "user": {
          "attributes": {
            "email": {
              "blank": "Kan niet leeg zijn als het wachtwoord gegeven is. "
            },
            "privacy_policy": {
              "accepted": "moet geaccepteerd worden"
            },
            "terms": {
              "accepted": "moet geaccepteerd worden"
            }
          }
        },
        "user_session": {
          "email": "E-Mail adres",
          "password": "Wachtwoord",
          "remember_me": "Ingeloggd blijven"
        }
      },
      "template": {
        "body": "Er zijn problemen met de volgende velden:",
        "header": {
          "one": "%{model} niet opgeslagen: 1 fout gevonden",
          "other": "%{model} niet opgeslagen: %{count} fouten gevonden"
        }
      }
    },
    "models": {
      "user": "Gebruiker"
    }
  },
  "apipie": {
    "api_documentation": "API documentation",
    "comments_powered_by_disqus": "comments powered by %{disqus}",
    "description": "Description",
    "enable_javascript_html": "Please enable JavaScript to view the %{comments_href}.",
    "error_code": "Code",
    "error_description": "Description",
    "error_metadata": "Metadata",
    "errors": "Errors",
    "examples": "Examples",
    "follow_instructions_href": "further instructions",
    "follow_instructions_html": "Follow %{href} on how to describe your controllers.",
    "goto_homepage_href": "%{app_name} API documentation homepage",
    "goto_homepage_html": "Try going to %{href}",
    "header_name": "Header name",
    "headers": "Headers",
    "metadata": "Metadata",
    "method_not_found_html": "Method %{method} not found for resource %{resource}.",
    "nil_allowed": "nil allowed",
    "no_docs_found": "No documentation found",
    "no_docs_found_descr": "We have not found any documentation for your API.",
    "oops": "Oops!!",
    "optional": "optional",
    "param_name": "Param name",
    "params": "Params",
    "required": "required",
    "resource": "Resource",
    "resource_not_found_html": "Resource %{resource} not found.",
    "resources": "Resources",
    "supported_formats": "Supported Formats"
  },
  "application": {
    "require_no_user": {
      "notice": "Je bent al ingeloggd..."
    },
    "require_user": {
      "notice": "Je moet inloggen om de pagina te zien."
    }
  },
  "breadcrumbs": {
    "node": {
      "create": "Een nieuwe locatie toevoegen",
      "edit": "Bewerk plaats"
    },
    "root": "Wheelmap"
  },
  "common": {
    "close": "sluiten",
    "skip": "Overslaan"
  },
  "date": {
    "abbr_day_names": {
      "0": "Zon",
      "1": "Maa",
      "2": "Din",
      "3": "Woe",
      "4": "Don",
      "5": "Vri",
      "6": "Zat"
    },
    "abbr_month_names": {
      "1": "Jan",
      "10": "Sep",
      "11": "Oct",
      "12": "Nov",
      "13": "Dec",
      "2": "Feb",
      "3": "Maa",
      "4": "Apr",
      "5": "Mei",
      "6": "Jun",
      "7": "Jul",
      "9": "Aug"
    },
    "day_names": {
      "0": "Zondag",
      "1": "Maandag",
      "2": "Dinsdag",
      "3": "Woensdag",
      "4": "Donderdag",
      "5": "Vrijdag",
      "6": "Zaterdag"
    },
    "formats": {
      "default": "%d-%m-%Y",
      "long": "%B %d, %Y",
      "short": "%b %d"
    },
    "month_names": {
      "1": "Januari",
      "10": "September",
      "11": "October",
      "12": "November",
      "13": "December",
      "2": "Febuari",
      "3": "Maart",
      "4": "April",
      "5": "Mei",
      "6": "Juni",
      "7": "Juli",
      "9": "Augustus"
    },
    "order": {
      "0": "jaar",
      "1": "maand",
      "2": "dag"
    }
  },
  "datetime": {
    "distance_in_words": {
      "about_x_hours": {
        "one": "ongeveer 1 uur",
        "other": "ongeveer %{count} uren"
      },
      "about_x_months": {
        "one": "ongeveer 1 maand",
        "other": "ongeveer %{count} maanden"
      },
      "about_x_years": {
        "one": "ongeveer 1 jaar",
        "other": "ongeveer %{count} jaren"
      },
      "almost_x_years": {
        "one": "bijna 1 jaar",
        "other": "bijna %{count} jaren"
      },
      "half_a_minute": "half minuut",
      "less_than_x_minutes": {
        "one": "minder dan een minuut",
        "other": "minder dan %{count} minuten"
      },
      "less_than_x_seconds": {
        "one": "minder dan 1 seconde",
        "other": "minder dan %{count} seconden"
      },
      "over_x_years": {
        "one": "voor 1 jaar",
        "other": "voor %{count} jaren"
      },
      "x_days": {
        "one": "1 dag",
        "other": "%{count} dagen"
      },
      "x_minutes": {
        "one": "1 minuut",
        "other": "%{count} minuten"
      },
      "x_months": {
        "one": "1 maand",
        "other": "%{count} maanden"
      },
      "x_seconds": {
        "one": "1 seconde",
        "other": "%{count} seconden"
      }
    },
    "prompts": {
      "day": "Dag",
      "hour": "uur",
      "minute": "minuut",
      "month": "maand",
      "second": "Seconden",
      "year": "Jaar"
    }
  },
  "devise": {
    "confirmations": {
      "confirmed": "Jouw account is succesvol bevestigd. Je bent nu aangemeld.",
      "link": "You didn't receive confirmation instructions?",
      "send_instructions": "Je zal een email met de instructie voor jouw account bevestiging ontvangen. Dat duurt maar een paar minuten.",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to confirm your account."
    },
    "destroy": {
      "confirm": "Ben je zeker?",
      "headline": "Delete account",
      "link": "Nu verwijderen"
    },
    "edit": {
      "form": {
        "labels": {
          "current_password": "Actueel wachtwoord <i>(we need it to confirm your changes)</i>",
          "email": "Email",
          "password": "Wachtwoord <i>(leave empty, if you don\\'t want to change it)</i>",
          "password_confirmation": "Herhaal wachtwoord"
        },
        "submit": "Veranderingen opslaan"
      },
      "headline": "Bewerk account"
    },
    "failure": {
      "already_authenticated": "Je bent al aangemeld.",
      "inactive": "Jouw account is nog niet geactiveerd.",
      "invalid": "Fout email of wachtwoord",
      "invalid_token": "Ongeldig authentificatie bewijs.",
      "last_attempt": "You have one more attempt before your account will be locked.",
      "locked": "Jouw account is gesloten.",
      "not_found_in_database": "Invalid email or password.",
      "timeout": "Jouw sessie is afgelopen, alsjeblieft weer inlogggen om door te gaan.",
      "unauthenticated": "Je moet aangemeld zijn of aanmelden om door te gaan. ",
      "unconfirmed": "Je moet jouw account bevestigen voordat je doorgaat."
    },
    "mailer": {
      "confirmation_instructions": {
        "landing_page": "Please click on the link that we just sent to your email address. If you do not receive an email from us, please first check if it is not hiding in your spam folder. If it is not there return to the sign up page and try again.",
        "subject": "Een stap nog om jouw account te activeren"
      },
      "reset_password_instructions": {
        "subject": "Reset wachtwoord aanwijzing."
      },
      "unlock_instructions": {
        "subject": "Unlock instructions"
      }
    },
    "mandatory": "* nodig",
    "omniauth_callbacks": {
      "failure": "Autorisatie met  %{kind} mislukte. Fout: \"%{reason}\".",
      "permission_missing": "You did not grant the required permission.",
      "success": "Succesvol goedgekeurd van %{kind} account"
    },
    "password_recovery": {
      "form": {
        "labels": {
          "email": "Email"
        },
        "submit": "Reset wachtwoord"
      },
      "headline": "Wachtwoord vergeten?"
    },
    "password_reset": {
      "email": {
        "comment": "Als je geen wachtwoord aangevraagd hebt dan kan je deze mail negeren.<br/>Jouw wachtwoordwordt niet veranderd tot dat je op de bovenstaande link klikt en een nieuw wachtwoord invuld.",
        "headline": "Welkom %{email}",
        "link": "Verander mijn wachtwoord",
        "text": "We received a request to change your password. If you sent the request, click the following link - otherwise ignore this!"
      },
      "form": {
        "labels": {
          "password": "Nieuw wachtwoord",
          "password_confirmation": "Herhaal wachtwoord"
        },
        "submit": "Reset wachtwoord"
      },
      "headline": "Reset wachtwoord"
    },
    "passwords": {
      "link": "Wachtwoord vergeten?",
      "no_token": "You can't access this page without coming from a password reset email. If you do come from a password reset email, please make sure you used the full URL provided.",
      "send_instructions": "You will receive an email with instructions on how to reset your password in a few minutes",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to reset your password",
      "updated": "Jouw wachtwoord is succesvol veranderd. Je bent nu ingeloggd.",
      "updated_not_active": "Jouw wachtwoord is succesvol veranderd."
    },
    "registrations": {
      "destroyed": "Tot ziens! Jouw account werd succesvol verwijderd. Wij hopen jou ooit weer te zien. ",
      "inactive_signed_up": "Je hebt succesvol aangemeld. Maar wij kunnen jou niet inloggen. Reden: \"%{reason}\"",
      "link": "Aanmelden",
      "reasons": {
        "inactive": "inactief",
        "locked": "geblokkeerd",
        "unconfirmed": "onbevestigd"
      },
      "signed_up": "You have signed up successfully. A you have been sent a confirmation email.",
      "signed_up_but_inactive": "You have signed up successfully. However, we could not sign you in because your account is not yet activated.",
      "signed_up_but_locked": "You have signed up successfully. However, we could not sign you in because your account is locked.",
      "signed_up_but_unconfirmed": "A message with a confirmation link has been sent to your email address. Please open the link to activate your account.",
      "update_needs_confirmation": "You updated your account successfully, but we need to verify your new email address. Please check your email and click on the confirm link to finalize confirming your new email address.",
      "updated": "Jouw account is succesvol geactualiseerd."
    },
    "sessions": {
      "inactive": "Your account has not been activated yet",
      "invalid": "Ongeldig email of wachtwoord.",
      "invalid_token": "Ongeldig authentificatie bewijs.",
      "link": "Aanmelden",
      "locked": "Jouw account is geblokkeerd.",
      "new": {
        "no_osm_account": "Geen OpenStreetMap account?",
        "osm_promo_text": "The Wheelmap is based on geodata from OpenStreetMap (OSM). OpenStreetMap is a free worldwide map, created by people like you. It's like Wikipedia for maps. To be able to edit places or to create new ones you need an OpenStreetMap account and must be logged in with it.",
        "promo_text_thank_you": "Dank je wel voor je ondersteuning!",
        "sign_in_with": "Log in met %{kind}",
        "sign_up_with_osm": "Registreer je nu.",
        "wheelmap_promo_text": "With your knowledge about wheelchair accessible places you can help people with physical impairments to plan their daily lives better. Furthermore, this will help make OpenStreetMap more detailed."
      },
      "signed_in": "Succesvol aangemeld.",
      "signed_out": "Succesvol uitgelogd.",
      "timeout": "Jouw sessie is afgelopen, alsjeblieft weer inlogggen om door te gaan.",
      "unauthenticated": "Je moet aanmelden voordat je doorgaat.",
      "unconfirmed": "Je moet jouw account bevestigen voordat je doorgaat."
    },
    "sign_in": {
      "form": {
        "labels": {
          "email": "Email",
          "password": "Wachtwoord",
          "remember_me": "Aangemeld blijven?"
        },
        "submit": "Inloggen"
      },
      "headline": "Inloggen"
    },
    "sign_out": {
      "headline": "Uitloggen"
    },
    "sign_up": {
      "email": {
        "confirm_my_account": "Bevestig mijn account",
        "please_confirm": "Je kan jouw account door de volgende link bevestigen:",
        "welcome": "Welkom %{email}!"
      },
      "form": {
        "labels": {
          "email": "Email",
          "password": "Wachtwoord",
          "password_confirmation": "Herhaal wachtwoord",
          "wants_newsletter": "Yes, keep me up to date about Wheelmap - but please not more than once a month."
        },
        "submit": "Aanmelden"
      },
      "headline": "Aanmelden"
    },
    "unlocks": {
      "link": "You didn't receive unlock instructions?",
      "send_instructions": "You will receive an email in a few minutes with instructions on how to unlock your account",
      "send_paranoid_instructions": "If your account exists, you will receive an email in a few minutes with instructions on how to unlock your account",
      "unlocked": "Jouw account werd succesvol vrijgegeven. Je bent nu ingeloggd."
    }
  },
  "errors": {
    "dynamic_format": "%{message}",
    "format": "%{attribute} %{message}",
    "messages": {
      "accepted": "moet geaccepteerd worden",
      "already_confirmed": "Was al bevestigd, alsjeblieft probeer in te loggen.",
      "blank": "must be filled in",
      "carrierwave_download_error": "could not be downloaded",
      "carrierwave_integrity_error": "is not of an allowed file type",
      "carrierwave_processing_error": "failed to be processed",
      "confirmation": "Past niet bij de bevestiging",
      "confirmation_period_expired": "needs to be confirmed within %{period}, please request a new one",
      "empty": "must be filled in",
      "equal_to": "Moet precies %{count} zijn",
      "even": "must be an even number",
      "exclusion": "is gereserveerd",
      "expired": "Is verlopen, alsjeblieft vraag een nieuwe aan",
      "extension_black_list_error": "You are not allowed to upload %{extension} files, prohibited types: %{prohibited_types}",
      "extension_white_list_error": "You are not allowed to upload %{extension} files, allowed types: %{allowed_types}",
      "greater_than": "moet groter dan %{count} zijn",
      "greater_than_or_equal_to": "must be greater than or equal to %{count}",
      "inclusion": "niet geldig waard",
      "invalid": "niet geldig",
      "less_than": "moet minder zijn dan %{count}",
      "less_than_or_equal_to": "must be less than or equal to %{count}",
      "mime_types_processing_error": "Failed to process file with MIME::Types, maybe not valid content-type? Original Error: %{e}",
      "mini_magick_processing_error": "Failed to manipulate with MiniMagick, maybe it is not an image? Original Error: %{e}",
      "not_a_number": "is geen numer",
      "not_an_integer": "moet een gehele getal zijn",
      "not_found": "niet gevonden",
      "not_locked": "is niet geblokkeerd",
      "not_saved": {
        "one": "Een fout verbied het opslaan van  %{resource}:",
        "other": "%{count} fouten verbieden op te slaan %{resource}:"
      },
      "odd": "must be an odd number",
      "other_than": "must be other than %{count}",
      "present": "must be blank",
      "rmagick_processing_error": "Failed to manipulate with rmagick, maybe it is not an image? Original Error: %{e}",
      "taken": "werd al volbracht",
      "too_long": "is te lang (niet meer dan %{count} letters)\n",
      "too_short": "is te kort (niet minder dan %{count} letters)\n",
      "wrong_length": "is de foute lengte (moet %{count} letters zijn)\n"
    },
    "models": {
      "node": {
        "phone": {
          "invalid": "Het telefoonnummer is niet geldig. Het moet de volgende vorm hebben: +49 30 234567"
        },
        "website": {
          "invalid": "Website address is not valid."
        }
      }
    },
    "template": {
      "body": "Er waren problemen met de volgende velden:",
      "header": {
        "one": "1 fout verbied dat %{model} opgeslagen te worden.",
        "other": "%{count} fouten verbieden dit %{model} op te slaan"
      }
    }
  },
  "faq": {
    "answers": {
      "0": "U kunt altijd de markering van een plaats zelf veranderen. Kies gewoon de juiste markering en \"Save\" - klaar!",
      "1": "As a logged in user you can add / correct all the details of a place. Click on \"Edit\" and correct or add information in the mask.",
      "2": "U kunt meer informatie (bvb \"Deze plaats heeft een mobiele helling\") in de commentaar sectie toevoegen. Klik op \"Edit\" en \"add comment\""
    },
    "headline": "Is er een probleem met deze plaats?",
    "questions": {
      "0": "The marking is wrong.",
      "1": "The details of the place are incorrect or missing.",
      "2": "Ik heb meer informatie over dit project."
    }
  },
  "flash": {
    "actions": {
      "create": {
        "notice": "%{resource_name} werd succesvol ingevoegd"
      },
      "destroy": {
        "alert": "%{resource_name} kan niet verplaatst worden",
        "notice": "%{resource_name} werd succesvol verwijderd"
      },
      "update": {
        "notice": "%{resource_name} werd succesvol vernieuwed"
      }
    },
    "photos": {
      "destroy": {
        "notice": "Beeld werd succesvol verwijderd"
      }
    }
  },
  "form": {
    "show_fully_accessible_places": "rolstoel toegankelijk",
    "show_limited_accessible_places": "Gedeeltelijk rolstoeltoegankelijk",
    "show_places_without_status": "Onbekende status",
    "show_unaccessible_places": "Niet rolstoeltoegankelijk"
  },
  "formtastic": {
    "hints": {
      "email": "We treat your address confidentially. We promise not to send you spam!",
      "lat": "Beweeg de marker op de kaart in de correcte positie",
      "osm_username": "Nog geen lid op dit moment? <a href=\"http://openstreetmap.org/user/new\" target=\"_blank\">Maak nu een Openstreetmap account</a>\n",
      "password": "(laat dit leeg als je het niet wil veranderen )",
      "phone": "Bijvoorbeeld: +49 30 12345678",
      "website": "Bijvoorbeeld: http://www.voorbeeld.com"
    },
    "labels": {
      "category": "Categorie:",
      "centralkey": "Centrale sluitel",
      "city": "Stad:",
      "create": "Nieuwe locatie toevoegen",
      "email": "E-mail",
      "finish": "Einde",
      "housenumber": "Nee:",
      "lat": "Breedtegraad",
      "lon": "Lengtegraad",
      "name": "Naam:",
      "osm_password": "OpenStreetMap wachtwoord",
      "osm_username": "OpenStreetMap account naam",
      "password": "Wachtwoord",
      "password_confirmation": "Herhaal wachtwoord",
      "phone": "Telefoon:",
      "postcode": "Postcode",
      "privacy_policy": "Ik accepteer paragraaf 1 en 2 van het privacy overeenkomst.",
      "reset": "Resetten",
      "save": "Opslaan",
      "street": "Straat:",
      "terms": "Ik accepteer de voorwaarden.",
      "type": "Invullen:",
      "website": "Internetpagina:",
      "wheelchair": "Rolstoel toegankelijkheid?",
      "wheelchair_description": "Toegankelijkheid commentaar:",
      "wheelchair_toilet": "rolstoeltoegankelijk toilet"
    },
    "titles": {
      "basic": "Basic data",
      "optional": "Meer informatie <span class=\"addition\">(all fields are optional)</span>"
    }
  },
  "global": {
    "form_validation_error": "Alsjeblieft let op de fouten in de onderstaande lijst"
  },
  "header": {
    "meta": {
      "description": "Wheelmap.org is an online map to search, find and mark wheelchair-accessible places. Get involved by marking public places like bars, restaurants, cinemas or supermarkets!",
      "homepage": "Startpagina / internetpagina",
      "keywords": "rolstoel toegankelijk plaatsen vinden, zoek markering",
      "search": "Zoeken",
      "title": "Wheelmap.org"
    },
    "navigation": {
      "about_wheelmap": "Over Wheelmap",
      "blog": "Blog",
      "choose_language": "Kies de taal",
      "contact": "Contact",
      "feedback": "Feedback",
      "home": "Start",
      "how_to_add_a_place": "Hoe kan ik plaatsen toevoegen?",
      "imprint": "Colofon ",
      "logged_in_as": "Aangemeld als:",
      "login": "Inloggen",
      "logout": "Uitloggen",
      "map": "Plattegrond",
      "newsletter": "Nieuwsbrief",
      "press": "Pers",
      "profile": "Profiel",
      "projects": "Projecten",
      "suggestions": "Adviezen",
      "what_is_barrier_free": "Wat betekend \"wheelchair accessible\"?",
      "what_is_wheelmap": "Wat is Wheelmap?"
    },
    "searchbar": {
      "add_place": "Voeg een andere plaats toe",
      "find": "Vind",
      "placeholder": "Bijvoorbeeld Sunset Boulevard L.A. of Brandenburg Gate Berlin",
      "title_add_place": "Voeg nu een nieuwe plaats op deze positie toe!"
    },
    "tagline": "Wheelmap logo",
    "title": "Vind rolstoeltoegankelijke locaties ",
    "toolbar": {
      "categories": "Categorieën"
    }
  },
  "helpers": {
    "page_entries_info": {
      "more_pages": {
        "display_entries": "%{entry_name} <b>%{first}&nbsp;-&nbsp;%{last}</b> van de <b>%{total}</b> getoond"
      },
      "one_page": {
        "display_entries": {
          "one": "<b>%{count}</b> %{entry_name} getoond",
          "other": "Alle <b>%{count}</b> %{entry_name} getoond",
          "zero": "No %{entry_name} found"
        }
      }
    },
    "select": {
      "prompt": "Kies alsjeblieft"
    },
    "submit": {
      "create": "Creëer %{model}",
      "submit": " %{model} opslaan",
      "update": "update %{model}"
    }
  },
  "home": {
    "index": {
      "embed_link": "Show on Wheelmap.org",
      "filter": {
        "category": "Kies categorie",
        "deselect_all": "Los de hele selectie op",
        "select_all": "Selecteer alles",
        "wheelchair": "Rolstoel toegangelijk?"
      },
      "ie": {
        "action": {
          "ignore": "Negeren",
          "upgrade": "Actualiseer Browser"
        },
        "warning": {
          "headline": "Wij excuseren!",
          "message": "You appear to be using Internet Explorer. Wheelmap requires a standards compliant browser to work properly. Please consider using Firefox, Chrome, Safari or Opera."
        }
      },
      "link": {
        "node": {
          "create": "Een nieuwe locatie toevoegen"
        }
      },
      "overlay": {
        "button": "Oké laat ons beginnen.",
        "categories": "Selecteer plaatsen via de categorieën",
        "filter": "Selecteer plaatsen met de Wheelchair toegang",
        "headline": "Markeer en vind rolstoel toegankelijke plaatsen met Wheelmap.org - wereldwijd en gratis. Het is makkelijk:",
        "lookup": "Zoek een speciale plaats",
        "secondary_headline": "Ons stoplicht systeem om de rolstoel toegankelijke openbare ruimtes te markeren:"
      },
      "popup": {
        "form": {
          "limited": "Gedeeltelijk rolstoeltoegankelijk",
          "no": "Niet rolstoeltoegankelijk",
          "save": "Actualiseren",
          "unknown": "Onbekende status",
          "yes": "rolstoeltoegankelijk"
        },
        "help": "rolstoel toegankelijk? (Hulp)",
        "more": "meer..."
      }
    }
  },
  "how?": "Hoe?",
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
          "headline": "All %{type} in %{city} met onbekende rolstoel status (%{count})"
        },
        "yes": {
          "headline": "Compleet rolstoel toegankelijk %{type} in %{city} (%{count})"
        }
      }
    }
  },
  "layouts": {
    "application": {
      "banner": {
        "alt": "Een project van Sozialhelden.de"
      }
    }
  },
  "models": {
    "category": {
      "prompt": "Kies een categorie"
    },
    "node": {
      "info_edit_position": "The location will appear on the Wheelmap as it is shown above. If the marker is not in the correct spot you can <a href=\"%{url}\">change its position on the OpenStreetMap.</a>",
      "mail": {
        "body": "(Please only write in English or German.)\n\nHi Sozialhelden,\nsomething is wrong with location: %{url}\n\nThe problem is:",
        "subject": "[Wheelmap] Problem with %{headline}"
      }
    },
    "node_type": {
      "prompt": "Choose a type"
    }
  },
  "node": {
    "address": {
      "city": "%{city} %{postcode}\n",
      "street": "%{housenumber} %{street}\n"
    },
    "tags": {
      "phone": "Telefoon:",
      "website": "Internetpagina"
    }
  },
  "nodes": {
    "create": {
      "flash": {
        "not_successfull": "Oops, jouw input was niet correct of niet compleet.",
        "successfull": "Dank je, de invoer werd opgeslagen en zal straks online staan."
      }
    },
    "edit": {
      "header": {
        "title": "Bewerk plaats: %{node} | wheelmap.org"
      },
      "link": {
        "large_map": "&laquo; Annuleer"
      }
    },
    "errors": {
      "default": "Iets is fout gegaan. We zijn hierover geïnformeerd",
      "not_authorized": "Excuus, authentificatie faalde",
      "not_available": "Excuus, de pagina is tijdelijk niet beschikkbar.",
      "not_existent": "Excuus, de plaats is niet meer beschikbaar.",
      "not_found": "Excuus, pagina niet gevonden.",
      "param_missing": "Alsjeblieft voeg een zoek term toe"
    },
    "flash": {
      "authorize_wheelmap": "Je hebt een OpenStreetMap account nodig om de data te veranderen."
    },
    "new": {
      "form": {
        "legend": "locatie",
        "location": "Please click on the map where the place is located!",
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
        "title": "Nieuwe plaats | wheelmap.org"
      },
      "link": {
        "large_map": "Annuleren"
      }
    },
    "node": {
      "link": {
        "claim": "Werk je hier?",
        "edit_node": "Bewerk plaats",
        "report_bug": "Geef een probleem op"
      }
    },
    "node_data": {
      "address": "adres",
      "contact_details": "contactgegevens"
    },
    "node_edit": {
      "details": "Details",
      "edit": "Redigeren"
    },
    "node_map": {
      "map": "Plattegrond"
    },
    "node_note": {
      "comment": "Commentaar"
    },
    "node_photos": {
      "add": "Toevoegen",
      "photos_of_this_place": "Fotos van deze plaats:",
      "upload": "Uploaden"
    },
    "node_similar": {
      "similar": "Similar places: %{name}"
    },
    "node_status": {
      "accessible_toilet": "rolstoeltoegankelijk toilet",
      "premium": "%{name} says: this place is",
      "wheelchair_accessibility": "Rolstoel toegangelijk?"
    },
    "node_streetview": {
      "streetview": "Streetview:"
    },
    "show": {
      "header": {
        "meta": {
          "description": "Find out if this place is wheelchair accessible on Wheelmap.org. Or add further information and photos to the place.",
          "title": "This place is on Wheelmap.org: %{name}"
        },
        "title": "Plaats:  %{node} | wheelmap.org"
      },
      "link": {
        "back": "terug",
        "large_map": "Vergroten",
        "listing": "Alle vergelijkbare plaatsen '%{type}' in %{city}\n",
        "upload": "Upload beeld"
      },
      "more_data_from": "There is more information about this place, validated by:",
      "share": {
        "email": "E-mail",
        "facebook": "Facebook",
        "text": "I found this place on Wheelmap.org: %{name}",
        "twitter": "Twitter"
      },
      "show-in-osm": "OpenStreetMap"
    },
    "update": {
      "flash": {
        "not_successfull": "Oops, jouw input was of niet correct of niet compleet.",
        "successfull": "Dank je, de invoer werd succesvol opgeslagen en zal straks online staan."
      }
    },
    "update_wheelchair": {
      "successfull": "De statuus voor \"%{name}\" werd verandert naar \"%{status} rolstoel toegankelijk\" en zal straks online op de site staan. "
    }
  },
  "number": {
    "currency": {
      "format": {
        "delimiter": ",",
        "format": "%u%n",
        "precision": 2,
        "separator": ".",
        "significant": false,
        "strip_insignificant_zeros": false,
        "unit": "$"
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
        "format": "%n %u\n",
        "units": {
          "billion": "Biljoen",
          "million": "miljoen",
          "quadrillion": "Biljard",
          "thousand": "Duizend",
          "trillion": "Triljoen",
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
            "one": "Byte",
            "other": "Bytes"
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
  "or": "of",
  "place": {
    "one": "%{count} plaats",
    "other": "%{count} plaatsen"
  },
  "poi": {
    "category": {
      "accommodation": "Accomodatie",
      "education": "Educatie",
      "food": "Voedsel",
      "government": "Overheid",
      "health": "Gezondheid",
      "leisure": "Vrije tijd",
      "misc": "Diversen",
      "money_post": "Bank / Post office",
      "public_transfer": "Public transport",
      "shopping": "Winkelen",
      "sport": "Sport",
      "tourism": "Toerisme",
      "unknown": "Onbekend"
    },
    "name": {
      "accommodation": {
        "beach_resort": "Strand hotel",
        "bed_and_breakfast": "Bed en ontbijt",
        "camp_site": "Kampeerplaats",
        "caravan_site": "Kampeerplaats",
        "chalet": "Berghut",
        "dormitory": "Dormitory",
        "guest_house": "Gasthuis",
        "hostel": "Hostel",
        "hotel": "Hotel",
        "motel": "Motel"
      },
      "education": {
        "college": "Hogeschool/universiteit",
        "driving_school": "Rijschool",
        "kindergarten": "Kleuterschool",
        "library": "bibliotheek",
        "museum": "Museum",
        "school": "School",
        "university": "Universiteit"
      },
      "food": {
        "bar": "Bar",
        "biergarten": "Biergarten",
        "cafe": "Café ",
        "drinking_water": "Drinkwater",
        "fast_food": "Fast Food",
        "ice_cream": "Ijssalon",
        "pub": "Kroeg",
        "restaurant": "Restaurant"
      },
      "government": {
        "courthouse": "Het paleis van justitie",
        "embassy": "Ambassade",
        "government": "Overheidskantoor",
        "police": "Politie",
        "public_building": "Openbaar gebouw",
        "townhall": "Town hall"
      },
      "health": {
        "dentist": "Tandarts",
        "doctors": "Doctor",
        "hearing_aids": "Audicien (gehoorapperaat winkel)",
        "hospital": "Ziekenhuis",
        "medical_supply": "Medische verzorging",
        "pharmacy": "Apotheek",
        "social_facility": "Sociale voorziening",
        "veterinary": "Dierenarts"
      },
      "leisure": {
        "arena": "Arena",
        "brothel": "Bordeel",
        "casino": "Casino",
        "cinema": "bioscoop",
        "community_centre": "Community centre",
        "gallery": "Galerij",
        "nightclub": "Nachtclub",
        "playground": "Speelplaats",
        "sauna": "Sauna",
        "stripclub": "Stripclub",
        "theatre": "Theater",
        "zoo": "Dierentuin"
      },
      "misc": {
        "company": "Bedrijf (zetel)",
        "estate_agent": "Makelaar",
        "insurance": "Verzekering",
        "lawyer": "Advocaat",
        "place_of_worship": "Kerk, religieuze plaats",
        "toilets": "Toiletten"
      },
      "money_post": {
        "atm": "Pinautomaat",
        "bank": "Bank",
        "bureau_de_change": "Wisselkantor",
        "post_box": "Brievenbus",
        "post_office": "Postkantoor"
      },
      "public_transfer": {
        "aerodrome": "Vliegveld",
        "bicycle_parking": "Fiets parkeerplaats",
        "bicycle_rental": "Fiets verhuur",
        "boatyard": "Boat yard",
        "bus_station": "Bushalte",
        "bus_stop": "Bushalte",
        "cable_car": "Kabelbaan",
        "car_rental": "Auto verhuur",
        "car_sharing": "Car sharing / Auto verhuren en delen",
        "chair_lift": "Stoeltjeslift",
        "ferry": "Veerboot",
        "ferry_terminal": "Veerboot haven",
        "fuel": "Tankstation",
        "halt": "Bushalte",
        "light_rail": "Sprinter",
        "parking": "Parkeren",
        "parking_aisle": "Parkeerplaats",
        "platform": "Perron",
        "station": "Metro",
        "subway_entrance": "Metro ingang",
        "terminal": "Vliegveld terminal",
        "tram_stop": "Tramhalte"
      },
      "shopping": {
        "alcohol": "Spiritualia",
        "bakery": "Bakkerij",
        "beauty": "Schoonheidssalon",
        "beverages": "Dranken",
        "bicycle": "Fietswinkel",
        "books": "Boeken",
        "butcher": "Slager",
        "car_repair": "Autogarage",
        "car_shop": "Auto winkel",
        "chemist": "Chemist / Drugstore",
        "clothes": "Kleren",
        "computer": "Computer",
        "confectionery": "Zoetwaren winkel",
        "convenience": "Commoditeit",
        "deli": "Delicatessen",
        "department_store": "Afdelingswinkel",
        "doityourself": "Doe het zelf",
        "dry_cleaning": "Stomerij ",
        "electronics": "Elektronica",
        "fabric": "Stoffen winkel",
        "farm_shop": "Groenten winkel",
        "florist": "Bloemenbinder",
        "furniture": "Meubels",
        "garden_centre": "Garden centre",
        "gift": "Cadeau winkel",
        "hairdresser": "Kapper",
        "hardware": "Hardware",
        "jewelry": "Juwelier",
        "kiosk": "Kiosk",
        "laundry": "Wasserij",
        "mall": "Winkelcentrum",
        "optician": "Opticien",
        "organic": "Organische winkel",
        "outdoor": "Buitensport winkel",
        "pet": "Huisdier winkel",
        "photo": "Foto",
        "second_hand": "Tweedehands",
        "shoes": "Schoenen",
        "sports": "Sport",
        "stationery": "Kantoorbenodigheden",
        "supermarket": "Supermarkt",
        "toys": "Speelgoed",
        "travel_agency": "Reisbureau",
        "video": "Videotheek"
      },
      "sport": {
        "pitch": "Sport velden",
        "sports_centre": "Sport centrum",
        "stadium": "Stadion",
        "swimming": "Zwemmen",
        "swimming_pool": "Zwembad"
      },
      "tourism": {
        "archaeological_site": "Archeologische kant ",
        "arts_centre": "Kunst huis",
        "artwork": "Kunstwerk",
        "attraction": "Attractie",
        "battlefield": "Slagveld",
        "beach": "Strand",
        "beacon": "Vuurtoren",
        "castle": "kasteel",
        "cave_entrance": "Holte ingang",
        "information": "VVV Toeristen informatie",
        "memorial": "Monument",
        "theme_park": "Attractiepark",
        "tower": "Toren",
        "viewpoint": "Uitkijkpunt"
      },
      "unknown": {
        "unknown": "Onbekend"
      }
    }
  },
  "profile": {
    "edit": {
      "application": {
        "oauth": {
          "connected": "Status: verbonden",
          "grant": "Nu verbinden",
          "not_connected": "Status: Niet verbonden",
          "revoke": "onderbroken"
        }
      },
      "headline": "Bewerk jouw profiel"
    }
  },
  "ransack": {
    "all": "alle",
    "and": "en",
    "any": "enig",
    "asc": "oplopend",
    "attribute": "attribuut",
    "combinator": "combinator",
    "condition": "conditie",
    "desc": "aflopend",
    "or": "of",
    "predicate": "eigenschap",
    "predicates": {
      "blank": "is afwezig",
      "cont": "bevat",
      "cont_all": "bevat alle",
      "cont_any": "bevat enig",
      "does_not_match": "evenaart niet",
      "does_not_match_all": "evenaart niet voor alle",
      "does_not_match_any": "evenaart niet voor enig",
      "end": "eindigt met",
      "end_all": "eindigt met alle",
      "end_any": "eindigt met enig",
      "eq": "gelijk",
      "eq_all": "gelijk alle",
      "eq_any": "gelijk enig",
      "false": "is niet waar",
      "gt": "groter dan",
      "gt_all": "groter dan alle",
      "gt_any": "groter dan enig",
      "gteq": "groter dan or equal to",
      "gteq_all": "groter dan or equal to alle",
      "gteq_any": "groter dan or equal to enig",
      "in": "in",
      "in_all": "in alle",
      "in_any": "in enig",
      "lt": "kleiner dan",
      "lt_all": "kleiner dan alle",
      "lt_any": "kleiner dan enig",
      "lteq": "kleiner dan of gelijk aan",
      "lteq_all": "kleiner dan of gelijk aan alle",
      "lteq_any": "kleiner dan of gelijk aan enig",
      "matches": "evenaart",
      "matches_all": "evenaart alle",
      "matches_any": "evenaart enig",
      "not_cont": "bevat niet",
      "not_cont_all": "bevat niet alle",
      "not_cont_any": "bevat niet enig",
      "not_end": "eindigt niet met",
      "not_end_all": "eindigt niet met alle",
      "not_end_any": "eindigt niet met enig",
      "not_eq": "niet gelijk aan",
      "not_eq_all": "niet gelijk aan alle",
      "not_eq_any": "niet gelijk aan enig",
      "not_in": "niet in",
      "not_in_all": "niet in alle",
      "not_in_any": "niet in enig",
      "not_null": "is niet null",
      "not_start": "start niet met",
      "not_start_all": "start niet met alle",
      "not_start_any": "start niet met enig",
      "null": "is null",
      "present": "is present",
      "start": "start met",
      "start_all": "start met alle",
      "start_any": "start met enig",
      "true": "is waar"
    },
    "search": "zoeken",
    "sort": "sorteren",
    "value": "waarde"
  },
  "search": {
    "index": {
      "no-results": {
        "headline": "Sorry, we couldn’t find a place called \"%{query}\".",
        "hint": {
          "example": "<strong>bijvoorbeeld:</strong> London, United Kingdom",
          "info": "Our search service only works with name and/or address information. Hence, please either search for the name of the place or an address, e.g. street name and/or city. Searching for a type of place, e.g. restaurant or cinema, does not work!",
          "work_in_progress": "We work hard to make searching for places easier and more intuitive in the future."
        },
        "try_this": {
          "address": "Geef a.u.b. meer <strong>address details</strong>.",
          "intro": "Probeer dit",
          "spell_check": "Controleer a.u.b. de  <strong>spelling</strong> van je text"
        }
      },
      "results": {
        "ticker": {
          "one": "%{count} resultaat",
          "other": "%{count} resultaat:"
        }
      },
      "search": {
        "for": "Zoek naar  \"%{q}\"",
        "not_found": "Geen plaats gevonden!"
      }
    },
    "timeout": {
      "headline": "Sorry, something went wrong",
      "info": "Onze zoekdienst was tijdelijk buiten werk",
      "repeat_search": "Herhaal de zoekopdracht"
    }
  },
  "splash": {
    "countline": "%{count} plaatsen zijn al getekend.",
    "headline": "Iedereen kan rolstoel toegankelijke plaatsen toevoegen!",
    "start": "Start",
    "step1": "Klik op een plaats die je kent",
    "step2": "Markeer het en klik op opslaan.",
    "step3": "Gelukt! Registreren is niet nodig.",
    "what_is_wheelmap": "Wat is Wheelmap?"
  },
  "statistics": "Statistieken",
  "support": {
    "array": {
      "last_word_connector": "en",
      "sentence_connector": "en",
      "two_words_connector": "en",
      "words_connector": ", "
    },
    "select": {
      "prompt": "Alsjeblieft kies"
    }
  },
  "time": {
    "am": "'s ochtends",
    "formats": {
      "default": "%a %d %b %Y %H:%M:%S %Z",
      "long": "%d %B %Y %H:%M",
      "short": "%d %b %H:%M"
    },
    "pm": "'s middags"
  },
  "toiletstatus": {
    "no": "WC niet rolstoeltoegankelijk",
    "unknown": "Status van de toilet is onbekend",
    "what_is": {
      "no": "Doorways' inner width min. 90 cm (35 in), clear floor space min. 150 x 150 cm (59 x 59 in), wheelchair-height toilet seat, folding grab rails and accessible hand basin.",
      "unknown": "Help out by marking the toilet status!",
      "yes": "Doorways' inner width min. 90 cm (35 inc), clear floor space min. 150 x 150 cm (59 x 59), wheelchair-height toilet seat, folding grab rails and accessible hand basin."
    },
    "yes": "Rolstoeltoegankelijk toilet"
  },
  "user_sessions": {
    "create": {
      "activation": {
        "notice": "Jouw account is nu geactiveerd!"
      },
      "error": {
        "notice": "E-mail en wachtwoord passen niet. "
      },
      "notice": "Je bent in!"
    },
    "destroy": {
      "notice": "Tot zien en tot straks!"
    },
    "new": {
      "email": "Email adres",
      "login": "Log in",
      "login_with_twitter": "Log in met Twitter",
      "password": "Wachtwoord",
      "remember_me": "Aangemeld blijven"
    }
  },
  "users": {
    "after_signup_edit": {
      "welcome": {
        "headline": "You are almost there! Now on to finalize your Wheelmap account:",
        "set_password_for_mobile": "You have successfully registered with OpenStreetMap. Please choose an email address that you would like Wheelmap to use so we can keep you informed about your activities (for example the number of places you have marked). You can access this information on your \"Profile\".",
        "text": "Hoe kunnen wij contact met je opnemen? Je kan deze informatie later in je profiel veranderen."
      }
    },
    "edit": {
      "headline": {
        "your_images": "Jouw geupload beelden"
      }
    },
    "profile": {
      "edit": {
        "legends": {
          "user_data": "Your account information"
        },
        "title": "Profiel"
      },
      "newsletter": {
        "label": "Yes, keep me updated about Wheelmap.",
        "text": "Stay up to date with the Wheelmap newsletter. Don't worry, we won't spam you. You'll hear from us once a month at most.",
        "title": "Nieuwsbrief"
      },
      "photos": {
        "empty": "You haven't uploaded any photos yet.",
        "title": "Foto's "
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
          "settings": "Instellingen"
        },
        "providers": "Provider",
        "title": "Widget",
        "width": "Width"
      }
    }
  },
  "views": {
    "pagination": {
      "first": "&laquo; Eerste",
      "last": "Laatste &raquo;",
      "next": "Volgende &rsaquo;",
      "previous": "&lsaquo; Vorige",
      "truncate": "&hellip;"
    }
  },
  "wheelchairstatus": {
    "limited": "Gedeeltelijk rolstoeltoegankelijk",
    "no": "Niet rolstoeltoegankelijk",
    "unknown": "Onbekende status",
    "yes": "rolstoeltoegankelijk"
  },
  "wheelmap": {
    "footer": {
      "a_project_of": "Een project van",
      "based_on": "Gebaseerd op",
      "become_a_supporter": "Wordt een ondersteuner",
      "main_supporter": "Hoofd donateur"
    },
    "itunes": {
      "alt": "AppStore Logo / AppWinkel logo",
      "title": "Download de iPhone App nu"
    },
    "logo": {
      "alt": "Wheelmap logo - vind rolstoel toegangelijke plaatsen",
      "title": "Wheelmap - vind rolstoel toegangelijke plaatsen"
    },
    "what_is": {
      "fully_accessible": "Ingang zonder treden, alle kamers zonder treden.",
      "limited_accessible": "Ingang heeft een trede van max. 7cm (3 in), de meeste kamers zonder treden.",
      "not_accessible": "Ingang heeft een of meerdere treden, kamers zijn niet toegankelijk.",
      "unknown_accessible": "Help mee en markeer locaties!"
    }
  },
  "will_paginate": {
    "next_label": "Volgende &#8594;",
    "page_entries_info": {
      "multi_page": "Laat %{model} %{from} - %{to} of %{count} in het geheel zien",
      "multi_page_html": "Toont %{model} <b>%{from}&nbsp;-&nbsp;%{to}</b> of <b>%{count}</b> in het geheel ",
      "single_page": {
        "one": "Toont 1 %{model}",
        "other": "Toont alle %{count} %{model}",
        "zero": "Geen %{model} gevonden"
      },
      "single_page_html": {
        "one": "Toont  <b>1</b> %{model}",
        "other": "Toont <b>all&nbsp;%{count}</b> %{model}",
        "zero": "Geen %{model} gevonden"
      }
    },
    "page_gap": "&hellip;",
    "previous_label": "&#8592; Volgende"
  }
});
