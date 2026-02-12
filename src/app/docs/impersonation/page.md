---
title: User Impersonation
nextjs:
  metadata:
    title: User Impersonation
    description: How administrators can impersonate users for support and debugging purposes in GatherHub.
---

Impersonation lets administrators log in as another user to troubleshoot issues and provide support. {% .lead %}

---

## Overview

User impersonation allows superadmins to view the application exactly as another user sees it. This is useful for debugging issues, verifying permissions, and providing hands-on support.

{% callout type="warning" title="Admin feature only" %}
Impersonation is restricted to administrators with the `admin.impersonate.users` permission. It must also be enabled in the application configuration.
{% /callout %}

---

## Starting Impersonation

### From the User Management Page

1. Go to **Security > Users**
2. Find the user you want to impersonate
3. Click **Impersonate** on the user's row

You'll immediately see the application as that user, with all their permissions and organization context.

### Who Can Be Impersonated

| User Type | Can Be Impersonated |
|-----------|---------------------|
| Regular users | Yes |
| Organization admins | Yes |
| Superadmins | No (for security) |

---

## Impersonation Banner

While impersonating, a red warning banner appears at the top of every page:

- Shows the name of the user being impersonated
- Includes a **Leave Impersonation** link
- Visible on all layouts (dashboard, events, ops, profile)

The banner ensures you always know when you're acting as another user and can exit immediately.

---

## Exiting Impersonation

Click **Leave Impersonation** in the red banner to return to your own account. You'll be redirected back to the dashboard with your original session restored.

---

## Security

### Access Control

- **Permission required**: `admin.impersonate.users`
- **Config flag**: `impersonate.enabled` must be `true`
- **Superadmin protection**: Users with the `superadmin` role cannot be impersonated

### Audit Trail

All impersonation sessions are logged for security auditing purposes.

---

## Use Cases

### Debugging User Issues

When a user reports a problem ("I can't see my events"), impersonate them to see exactly what they see and diagnose the issue.

### Verifying Permissions

After configuring crew roles or organization permissions, impersonate a user with that role to verify they see the correct menus and actions.

### Support Assistance

Help users complete tasks by impersonating them and walking through the process, rather than trying to guide them remotely.

---

## Best Practices

- Only impersonate when necessary for support or debugging
- Exit impersonation as soon as you're done
- Do not make destructive changes while impersonating
- Communicate with the user if you need to impersonate their account

---

## Next Steps

- [Manage user accounts](/docs/account-setup)
- [Configure crew permissions](/docs/crew-permissions)
- [View common issues](/docs/common-issues)
