import db from './database';

const migrate = () => {
    console.log('migrating....')

    db.schema.createTableIfNotExists('logger', function (table) {
        table.increments();
        table.string('type');
        table.string('file');
        table.string('method');
        table.text('data');
        table.timestamps(false,true);
      }).then((r)=>console.log('createTableIfNotExists logger'))

      db.schema.createTableIfNotExists('books', function (table) {
        table.increments();
        table.string('title');
        table.text('description');
        table.string('author');
        table.string('genre');
        table.string('ISBN');
        table.double('price');
        table.date('publication_date');
        table.timestamps(false,true);
      }).then((r)=>console.log('createTableIfNotExists books'))

}
export default migrate;
/*
CREATE TABLE `books` (
	`id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
	`created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	`title` VARCHAR(255) NULL DEFAULT NULL,
	`description` VARCHAR(255) NULL DEFAULT NULL,
	`author` VARCHAR(255) NULL DEFAULT NULL,
	`ISBN` VARCHAR(255) NULL DEFAULT NULL,
	`genre` VARCHAR(255) NULL DEFAULT NULL,
	`publication_date` DATE NULL DEFAULT NULL,
	`price` DOUBLE NULL DEFAULT NULL,
	INDEX `index_id` (`id`)
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
AUTO_INCREMENT=13
;

CREATE TABLE `logger` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`type` VARCHAR(255) NULL DEFAULT NULL,
	`file` VARCHAR(255) NULL DEFAULT NULL,
	`method` VARCHAR(255) NULL DEFAULT NULL,
	`data` TEXT NULL,
	INDEX `Index 1` (`id`)
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
AUTO_INCREMENT=13
;

*/