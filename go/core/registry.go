package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewCartoonEntityFunc func(client *CartoonsSDK, entopts map[string]any) CartoonsEntity

