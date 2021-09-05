def print_obj_attributes(obj):
    if not obj:
        print(obj)
        return

    for name, value in vars(obj).items():
        if name[:2] != "__":
            print('%s=%s' % (name, value))
