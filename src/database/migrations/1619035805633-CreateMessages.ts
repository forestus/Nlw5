import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateMessages1619035805633 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "messages",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "admin_id",
                        type: "uuid",
                        isNullable: true
                    },
                    {
                        name:"user_id",
                        type: "uuid"
                    },
                    {
                        name:"text",
                        type: "varchar"
                    }, 
                    {
                        name:"created_at",
                        type:"timestamp",
                        default: "now()"
                    }
                ]
            })
        )
        await queryRunner.createForeignKey(
            "messages",
            new TableForeignKey({
                name:"FKUser",
                referencedTableName: "users",
                referencedColumnNames:["id"],
                columnNames: ["user_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL"
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("messages", "FKUser");
        await queryRunner.dropTable("messages");
    }

}
