#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <string.h>


typedef enum {
    JS_UNDEFINED,
    JS_INT64,
    JS_FLOAT64,
    JS_BOOLEAN,
    JS_STRING
} JS_Type;

typedef struct {
    JS_Type type;
    union {
        long long i64;
        double f64;
        bool b;
        char *str;
    } ye;
} JS_Value;

typedef struct {
    char *key;
    JS_Value value;
} JS_Property;

typedef struct {
    JS_Property *properties;
    int size;
    int cap;
} JS_Object;


JS_Value init_undefined(void) {
    JS_Value value;
    value.type = JS_UNDEFINED;
    return value;
}

JS_Value init_int64(long long int val) {
    JS_Value value;
    value.type = JS_INT64;
    value.ye.i64 = val;
    return value;
}

JS_Value init_float64(double val) {
    JS_Value value;
    value.type = JS_FLOAT64;
    value.ye.f64 = val;
    return value;
}

JS_Value init_boolean(bool val) {
    JS_Value value;
    value.type = JS_BOOLEAN;
    value.ye.b = val;
    return value;
}

JS_Value init_string(const char *val) {
    JS_Value value;
    value.type = JS_STRING;
    value.ye.str = strdup(val);
    return value;
}

JS_Object *create_object(void) {
    JS_Object *obj = malloc(sizeof(JS_Object));
    obj->size = 0;
    obj->cap = 4;
    obj->properties = malloc(sizeof(JS_Property) * obj->cap);
    return obj;
}

void free_value(JS_Value *v) {
    if (v->type == JS_STRING && v->ye.str) free(v->ye.str);
    v->type = JS_UNDEFINED;
}

void set_property(JS_Object *obj, const char *key, JS_Value val) { 
    for (int i = 0; i < obj->size; i++) {
        if (strcmp(obj->properties[i].key, key) == 0) {
            free_value(&obj->properties[i].value);
            obj->properties[i].value = val;
            return;
        }
    }
 
    if (obj->size == obj->cap) {
        obj->cap *= 2;
        obj->properties = realloc(obj->properties, sizeof(JS_Property) * obj->cap);
    }

    obj->properties[obj->size].key = strdup(key);
    obj->properties[obj->size].value = val;
    obj->size++;
}

bool get_property(JS_Object *obj, const char *key, JS_Value *out) {
    for (int i = 0; i < obj->size; i++) {
        if (strcmp(obj->properties[i].key, key) == 0) {
            if (out) *out = obj->properties[i].value;
            return true;
        }
    }
    return false;
}

void print_value(JS_Value v) {
    switch (v.type) {
        case JS_INT64: printf("%lld", v.ye.i64); break;
        case JS_FLOAT64: printf("%f", v.ye.f64); break;
        case JS_BOOLEAN: printf(v.ye.b ? "true" : "false"); break;
        case JS_STRING: printf("\"%s\"", v.ye.str); break;
        default: printf("undefined"); break;
    }
}

void free_object(JS_Object *obj) {
    for (int i = 0; i < obj->size; i++) {
        free(obj->properties[i].key);
        free_value(&obj->properties[i].value);
    }
    free(obj->properties);
    free(obj);
}


int main(int argc, char *argv[]) {
    JS_Object *obj = create_object();

    set_property(obj, "name", init_string("Liana"));
    set_property(obj, "age", init_int64(25));
    set_property(obj, "isStudent", init_boolean(true));
    set_property(obj, "pi", init_float64(3.1415));

    printf("JS Object properties:\n");
    for (int i = 0; i < obj->size; i++) {
        printf("%s: ", obj->properties[i].key);
        print_value(obj->properties[i].value);
        printf("\n");
    }

    JS_Value found;
    if (get_property(obj, "name", &found)) {
        printf("\nFound property 'name': ");
        print_value(found);
        printf("\n");
    }

    free_object(obj);
    return 0;
}
