---
title: Campaign Tracking
nextjs:
  metadata:
    title: Campaign Tracking
    description: Track email campaign performance and delivery in GatherHub.
---

Monitor the performance of your email campaigns with delivery tracking, open rates, and engagement metrics. {% .lead %}

---

## Tracking Overview

### What's Tracked

| Metric | Description |
|--------|-------------|
| Sent | Emails queued for delivery |
| Delivered | Successfully delivered |
| Bounced | Failed to deliver |
| Opened | Recipient opened email |
| Clicked | Recipient clicked a link |

---

## Campaign Dashboard

### View Campaign Stats

1. Go to **Communication**
2. Click on a campaign
3. View statistics dashboard

### Dashboard Elements

| Element | Description |
|---------|-------------|
| Summary | Key metrics at a glance |
| Delivery chart | Visual of delivery status |
| Engagement | Opens and clicks |
| Recipient list | Individual status |

---

## Delivery Metrics

### Delivery Status

| Status | Description |
|--------|-------------|
| Pending | Queued for sending |
| Sent | Handed to email provider |
| Delivered | Reached recipient's server |
| Bounced | Failed to deliver |
| Deferred | Temporary delivery issue |

### Bounce Types

| Type | Description |
|------|-------------|
| Hard bounce | Permanent failure (invalid address) |
| Soft bounce | Temporary failure (full inbox) |

---

## Engagement Metrics

### Open Tracking

**How it works:** Tracking pixel in email detected when opened.

| Metric | Calculation |
|--------|-------------|
| Opens | Total times opened |
| Unique opens | Individual recipients who opened |
| Open rate | Unique opens / Delivered × 100% |

### Click Tracking

**How it works:** Links are tracked when clicked.

| Metric | Calculation |
|--------|-------------|
| Clicks | Total link clicks |
| Unique clicks | Individual recipients who clicked |
| Click rate | Unique clicks / Delivered × 100% |
| Click-to-open | Unique clicks / Unique opens × 100% |

---

## Performance Benchmarks

### Industry Averages

| Metric | Average | Good | Excellent |
|--------|---------|------|-----------|
| Open rate | 20% | 25% | 30%+ |
| Click rate | 2.5% | 4% | 5%+ |
| Bounce rate | 2% | 1% | 0.5% |

### Improving Performance

| Issue | Solution |
|-------|----------|
| Low open rate | Improve subject lines |
| Low click rate | Better call-to-action |
| High bounces | Clean email list |

---

## Recipient-Level Tracking

### View Individual Status

1. Open campaign
2. Click **Recipients**
3. See status per person

### Recipient Information

| Column | Description |
|--------|-------------|
| Name | Recipient name |
| Email | Email address |
| Status | Delivered, Bounced, etc. |
| Opened | Yes/No, timestamp |
| Clicked | Yes/No, which links |

---

## Link Performance

### Track Link Clicks

See which links perform best:

| Link | Clicks | CTR |
|------|--------|-----|
| Register Now | 150 | 12% |
| View Event | 85 | 6.8% |
| Learn More | 42 | 3.4% |

### Link Insights

- Which content interests recipients
- Most effective call-to-action
- Areas for improvement

---

## Bounce Management

### Handling Bounces

1. Review bounced emails
2. Identify bounce reason
3. Take action:

| Reason | Action |
|--------|--------|
| Invalid address | Remove or update |
| Full inbox | Retry later |
| Server issue | Retry automatically |

### Bounce Prevention

- Verify email addresses at registration
- Clean list regularly
- Use double opt-in
- Remove inactive addresses

---

## Reporting

### Campaign Report

Export campaign data:

1. Open campaign
2. Click **Export Report**
3. Choose format
4. Download

### Report Contents

- Campaign summary
- Delivery statistics
- Engagement metrics
- Recipient details
- Link performance

---

## Comparing Campaigns

### Campaign Comparison

View multiple campaigns:

1. Go to **Communication**
2. Click **Compare**
3. Select campaigns
4. View side-by-side

### Comparison Metrics

| Campaign | Sent | Open Rate | Click Rate |
|----------|------|-----------|------------|
| Reminder 1 | 500 | 45% | 12% |
| Reminder 2 | 480 | 38% | 8% |
| Thank You | 450 | 55% | 5% |

---

## Optimization Tips

### Improve Open Rates

- Test subject lines
- Personalize sender name
- Optimize send time
- Segment audience

### Improve Click Rates

- Clear call-to-action
- Relevant content
- Mobile-friendly buttons
- Compelling copy

### Reduce Bounces

- Validate email at registration
- Regular list maintenance
- Remove invalid addresses
- Monitor delivery reputation

---

## Troubleshooting

### Low open rates

1. Check subject lines
2. Review send timing
3. Verify not in spam
4. Test different approaches

### High bounce rate

1. Clean email list
2. Remove invalid addresses
3. Check for typos
4. Verify recent registrations

### Tracking not working

1. Check tracking is enabled
2. Recipient may block tracking
3. Email client limitations
4. Allow time for data

---

## Next Steps

- [Create new campaigns](/docs/email-campaigns)
- [Improve templates](/docs/email-templates)
- [View participant data](/docs/managing-participants)
