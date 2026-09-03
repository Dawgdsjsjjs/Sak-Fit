
create extension if not exists pgcrypto;

create table if not exists public.members (
  id uuid primary key default gen_random_uuid(),
  member_code text unique not null,
  name text not null,
  email text not null,
  phone text not null,
  plan text not null,
  start_date date not null,
  expiry_date date not null,
  created_at timestamptz not null default now()
);

create table if not exists public.checkins (
  id uuid primary key default gen_random_uuid(),
  member_id uuid not null references public.members(id) on delete cascade,
  checked_in_at timestamptz not null default now()
);

alter table public.members enable row level security;
alter table public.checkins enable row level security;

drop policy if exists "demo members insert" on public.members;
create policy "demo members insert" on public.members
for insert to anon, authenticated
with check (true);

drop policy if exists "demo members read" on public.members;
create policy "demo members read" on public.members
for select to anon, authenticated
using (true);

drop policy if exists "demo checkins insert" on public.checkins;
create policy "demo checkins insert" on public.checkins
for insert to anon, authenticated
with check (true);

drop policy if exists "demo checkins read" on public.checkins;
create policy "demo checkins read" on public.checkins
for select to anon, authenticated
using (true);

create index if not exists members_code_idx on public.members(member_code);
create index if not exists checkins_member_idx on public.checkins(member_id);
