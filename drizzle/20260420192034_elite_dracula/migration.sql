ALTER TABLE "accounts" DROP CONSTRAINT "accounts_user_id_users_id_fkey";--> statement-breakpoint
ALTER TABLE "sessions" DROP CONSTRAINT "sessions_user_id_users_id_fkey";--> statement-breakpoint
DROP TABLE "accounts";--> statement-breakpoint
DROP TABLE "sessions";--> statement-breakpoint
DROP TABLE "users";--> statement-breakpoint
DROP TABLE "verifications";--> statement-breakpoint
DROP TABLE "communities";