def on_button_pressed_a():
    led.plot_bar_graph(input.light_level(), 255)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    if input.light_level() == 0:
        basic.show_number(input.light_level())
        basic.show_string("No Light")
    elif input.light_level() > 0 and input.light_level() <= 55:
        basic.show_number(input.light_level())
        basic.show_string("Very Low Light")
    elif input.light_level() > 55 and input.light_level() <= 130:
        basic.show_number(input.light_level())
        basic.show_string("Mid Level Light")
    elif input.light_level() > 130 and input.light_level() <= 200:
        basic.show_number(input.light_level())
        basic.show_string("High Level Light")
    elif input.light_level() > 200 and input.light_level() <= 255:
        basic.show_number(input.light_level())
        basic.show_string("Intense")
basic.forever(on_forever)
