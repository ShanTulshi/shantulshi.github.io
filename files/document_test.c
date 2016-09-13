/**
 * Machine Problem: Vector
 * CS 241 - Fall 2016
 */

#include "document.h"
#include <stdio.h>
#include <string.h>

// test your document here
void * cctor(void * elem) {
	return strdup((char *)elem);
}

void dtor (void * elem) {
	free(elem);
}

int main(int argc, char ** argv) {
	int c = 0;
	char ** files = NULL;
	if(argc > 1) {
		files = (char **) malloc((argc - 1) * sizeof(char *));
		int i = 1;
		for(; i < argc; i++) files[i - 1] = argv[i];
		c = argc;
	}
	else {
		files = (char **) malloc(sizeof(char *));
		printf("USAGE: ./document_test <file 1> <file 2> ...\nUsing the file \'test.txt\' instead...\n");
		files[0] = "test.txt";
		c = 1;
	}
	size_t out_file_name_len = 30;
	char * out_file_name = malloc(out_file_name_len);
	int i = 0;
	for(i = 0; i < c; i++) {
		printf("=====DOCUMENT #%d=====\n", i+1);
		Document * d = Document_create_from_file(files[i]);
		printf("document size: %lu\n", Document_size(d));
		printf("document printed below: \n");
		size_t j = 1;
		for(j = 1; j <= Document_size(d); j++)
			printf("%s\n", Document_get_line(d, j));

		printf("Writing to file: \'output%d.txt\'\n", i+1);
		snprintf(out_file_name, out_file_name_len, "output%d.txt", i+1);
		Document_write_to_file(d, out_file_name);
		Document_destroy(d);
		printf("\n\n");
	}
	if(files)
		free(files);
	return 0;
}
